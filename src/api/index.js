import { db } from "@/fireBaseConfig";
import { collection, getDocs, query, limit, startAfter, where } from 'firebase/firestore';
import { getImageUrl } from '@/utils';
export const getMainPageData = async (collectionName) => {
    const mainRef = collection(db, collectionName);
    const mainQuery = query(mainRef);
    const snapshot = await getDocs(mainQuery);
    const fetchedData = snapshot.docs[0].data();
    return {
        ...fetchedData,
        portrait: {
            desktop: getImageUrl(fetchedData.portrait.desktop),
            desktop_webp: getImageUrl(fetchedData.portrait.desktop_webp),
            mobile: getImageUrl(fetchedData.portrait.mobile),
            mobile_webp: getImageUrl(fetchedData.portrait.mobile_webp),
        },
    };
};
export const getProjects = async (collectionName, projectsAmount, lastProject) => {
    const projectsRef = collection(db, collectionName);
    const projectsQuery = lastProject
        ? query(projectsRef, limit(projectsAmount), startAfter(lastProject))
        : query(projectsRef, limit(projectsAmount));
    const snapshot = await getDocs(projectsQuery);
    const fetchedProjects = snapshot.docs.map(doc => {
        const projectData = doc.data();
        return {
            id: Number(doc.id),
            ...projectData,
            cover_url: getImageUrl(projectData.cover_url)
        };
    });
    const lastFromSnapshot = snapshot.docs
        ? snapshot.docs[snapshot.docs.length - 1]
        : null;
    return { lastFromSnapshot, fetchedProjects };
};
export const getProject = async (collectionName, projectSlug) => {
    const projectsRef = collection(db, collectionName);
    const projectsQuery = query(projectsRef, where('slug', '==', projectSlug));
    const snapshot = await getDocs(projectsQuery);
    if (snapshot.empty)
        return null;
    const fetchedProject = snapshot.docs.map(doc => {
        const projectData = doc.data();
        const mappedImages = projectData?.images?.map(imageData => {
            return {
                ...imageData,
                url: getImageUrl(imageData.url)
            };
        });
        return {
            id: Number(doc.id),
            ...projectData,
            cover_url: getImageUrl(projectData.cover_url),
            images: mappedImages,
        };
    });
    return fetchedProject[0];
};
//# sourceMappingURL=index.js.map