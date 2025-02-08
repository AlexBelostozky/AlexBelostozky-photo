import { db } from "@/fireBaseConfig";
import {
	collection,
	getDocs,
	query,
	limit,
	startAfter,
	QueryDocumentSnapshot,
	DocumentData
} from 'firebase/firestore';

import { Collections } from "@/types/database"
import { ProjectType } from "@/types/project";


export const getProjects = async (
	collectionName: Collections,
	projectsAmount: number,
	lastProject?: QueryDocumentSnapshot<DocumentData, DocumentData> | null,
) => {
	const projectsRef = collection(db, collectionName);
	const projectsQuery = lastProject
		? query(projectsRef, limit(projectsAmount), startAfter(lastProject))
		: query(projectsRef, limit(projectsAmount));

	const snapshot = await getDocs(projectsQuery);

	const fetchedProjects = snapshot.docs.map(doc => ({
		id: Number(doc.id),
		...(doc.data() as ProjectType),
	}));

	const lastFromSnapshot = snapshot.docs
		? snapshot.docs[snapshot.docs.length - 1]
		: null;

	return { lastFromSnapshot, fetchedProjects }
}