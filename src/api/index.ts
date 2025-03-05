import { db } from "@/fireBaseConfig";
import {
	collection,
	getDocs,
	query,
	limit,
	startAfter,
	where,
	QueryDocumentSnapshot,
	DocumentData,
	getCountFromServer,
	orderBy,
	QueryConstraint
} from 'firebase/firestore';

import { Collection } from "@/types/database"
import { ProjectType, ProjectsApiParams } from "@/types/project";
import { MainPageData } from "@/types/main";
import { getImageUrl } from '@/utils';


export const getMainPageData = async (collectionName: Collection) => {
	const mainRef = collection(db, collectionName);
	const mainQuery = query(mainRef);
	const snapshot = await getDocs(mainQuery);
	const fetchedData = snapshot.docs[0].data() as MainPageData;

	return {
		...fetchedData,
		portrait: {
			desktop: getImageUrl(fetchedData.portrait.desktop),
			desktop_webp: getImageUrl(fetchedData.portrait.desktop_webp),
			mobile: getImageUrl(fetchedData.portrait.mobile),
			mobile_webp: getImageUrl(fetchedData.portrait.mobile_webp),
		},
	};
}

export const getProjects = async ( params: ProjectsApiParams ) => {
	const {collectionName, projectsAmount, offset, sorting, filters} = params

	const projectsRef = collection(db, collectionName);
	const queryConstraints: QueryConstraint[] = [];
	const queryConstraintsAllPages: QueryConstraint[] = [];
	let startAtDoc: QueryDocumentSnapshot<DocumentData> | null = null;

	if (filters) {
		Object.entries(filters).forEach(([key, value]) => {
			if (key !== 'page' && key !== 'sorting') {
				queryConstraints.push(where(`tags.${key}`, '==', value));
			}
		});
	}

	if (sorting) {
		queryConstraints.push(orderBy('tags.year', sorting || 'asc'));
	}

	if (offset > 0) {
		const offsetQuery = query(projectsRef, ...queryConstraints, limit(offset));
		const offsetSnapshot = await getDocs(offsetQuery);
		startAtDoc = offsetSnapshot.docs[offset - 1] || null;
	}

	if (startAtDoc) {
		queryConstraints.push(startAfter(startAtDoc));
	}

	queryConstraints.push(limit(projectsAmount));

	const projectsQuery = query(projectsRef, ...queryConstraints);
	const snapshot = await getDocs(projectsQuery);
	const fetchedProjects = snapshot.docs.map(doc => {
		const projectData = doc.data() as ProjectType;

		return {
			id: Number(doc.id),
			...projectData,
			cover_url: getImageUrl(projectData.cover_url)
		};
	});

	filters && Object.entries(filters).forEach(([key, value]) => {
		if (key === 'page') return
		if (key === 'sorting') return
		queryConstraintsAllPages.push(where(`tags.${key}`, '==', value))
	})

	const allProjectsQuery = query(
		projectsRef,
		...queryConstraintsAllPages
	)
	const totalSnapshot = await getCountFromServer(allProjectsQuery);
	const totalProjects = totalSnapshot.data().count;

	return { fetchedProjects, totalProjects }
}

export const getAllTags = async (filters: Pick<ProjectsApiParams, 'filters'>) => {
	try {
		const queryConstraints: QueryConstraint[] = [];

		if (filters) {
			Object.entries(filters).forEach(([key, value]) => {
				if (key !== 'page' && key !== 'sorting') {
					queryConstraints.push(where(`tags.${key}`, '==', value));
				}
			});
		}

		const projectsRef = collection(db, "projects");
		const projectsQuery = query(projectsRef, ...queryConstraints)
		const snapshot = await getDocs(projectsQuery);

		const tagsMap: Record<string, Set<string | number>> = {};

		snapshot.forEach(doc => {
			const project = doc.data();

			if (project.tags && typeof project.tags === "object") {
				Object.entries(project.tags).forEach(([key, value ]) => {
					if (!tagsMap[key]) {
						tagsMap[key] = new Set();
					}
					if (Array.isArray(value)) {
						value.forEach(val => tagsMap[key].add(val));
					} else {
						tagsMap[key].add(value as string | number);
					}
				});
			}
		});

		const tags = Object.fromEntries(
			Object.entries(tagsMap).map(([key, values]) => [key, Array.from(values)])
		);

		return tags;
	} catch (error) {
		console.warn('Failed to load tags: ', error)
	}
};

export const getProject = async (
	collectionName: Collection,
	projectSlug: string,
) => {
	const projectsRef = collection(db, collectionName);
	const projectsQuery = query(projectsRef, where('slug', '==', projectSlug));

	const snapshot = await getDocs(projectsQuery);

	if (snapshot.empty) return null;

	const fetchedProject = snapshot.docs.map(doc => {
		const projectData = doc.data() as ProjectType;

		const mappedImages = projectData?.images?.map(imageData => {
			return {
				...imageData,
				url: getImageUrl(imageData.url)
			}
		})

		return {
			id: Number(doc.id),
			...projectData,
			cover_url: getImageUrl(projectData.cover_url),
			images: mappedImages,
		};
	});

	return fetchedProject[0]
}
