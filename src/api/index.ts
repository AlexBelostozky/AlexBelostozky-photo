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
	startAt,
	orderBy
} from 'firebase/firestore';

import { Collection } from "@/types/database"
import { ProjectType } from "@/types/project";
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

export const getProjects = async (
	collectionName: Collection,
	projectsAmount: number,
	offset: number = 0
) => {
	const projectsRef = collection(db, collectionName);
	// const projectsQuery = lastProject
	// 	? query(projectsRef, limit(projectsAmount), startAfter(lastProject))
	// 	: query(projectsRef, limit(projectsAmount));

	let startAtDoc: QueryDocumentSnapshot<DocumentData> | null = null;

	console.log(offset);
	if (offset > 0) {
		const offsetQuery = query(
			projectsRef,
			limit(projectsAmount)
		);

		const offsetSnapshot = await getDocs(offsetQuery);
		startAtDoc = offsetSnapshot.docs[offset - 1] || null;
	}

	const projectsQuery = startAtDoc
		? query(projectsRef, startAfter(startAtDoc), limit(projectsAmount))
		: query(projectsRef, limit(projectsAmount));

	const snapshot = await getDocs(projectsQuery);


	const totalSnapshot = await getCountFromServer(projectsRef);

	const totalProjects = totalSnapshot.data().count;

	const fetchedProjects = snapshot.docs.map(doc => {
		const projectData = doc.data() as ProjectType;
		return {
			id: Number(doc.id),
			...projectData,
			cover_url: getImageUrl(projectData.cover_url)
		};
	});

	const lastFromSnapshot = snapshot.docs
		? snapshot.docs[snapshot.docs.length - 1]
		: null;

	return { lastFromSnapshot, fetchedProjects, totalProjects }
}

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
