import { getMainPageData, getProjects } from "./index";
import { db } from "@/fireBaseConfig";
import { ProjectsApiParams } from "@/types/project";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";
import {
	collection,
	getDocs,
	query,
	where,
	orderBy,
	limit,
	startAfter,
	getCountFromServer
} from "firebase/firestore";

jest.mock('firebase/firestore', () => {
  const actualFirestore = jest.requireActual('firebase/firestore');
  return {
    ...actualFirestore,
    collection: jest.fn(),
    getDocs: jest.fn(),
    query: jest.fn(),
	where: jest.fn(),
    orderBy: jest.fn(),
    limit: jest.fn(),
    startAfter: jest.fn(),
    getCountFromServer: jest.fn(),
  };
});

jest.mock('@/firebaseConfig', () => ({
	db: {}
}));

describe('getMainPageData', () => {
	const mockData = {
		portrait: {
			desktop: 'desktop.jpg',
			desktop_webp: 'desktop.webp',
			mobile: 'mobile.jpg',
			mobile_webp: 'mobile.webp',
		}
	}

	it('should return data with updated URLs', async () => {
		const mockSnapshot = {
			docs: [{ data: () => mockData }]
		};

		(getDocs as jest.Mock).mockResolvedValue(mockSnapshot);
		const result = await getMainPageData('main');

		expect(result).toEqual({
			...mockData,
			portrait: {
				desktop: expect.stringContaining('desktop.jpg'),
				desktop_webp: expect.stringContaining('desktop.webp'),
				mobile: expect.stringContaining('mobile.jpg'),
				mobile_webp: expect.stringContaining('mobile.webp'),
			}
		})
	})
})

describe('getProjects', () => {
	const mockParams: ProjectsApiParams = {
		collectionName: 'projects',
		projectsAmount: 5,
		offset: 0,
		filters: {},
	}

	beforeEach(() => {
		jest.clearAllMocks();
	})

	it('should form query correctly and return data', async () => {
		const mockFirestoreData = [
			{
				id: "1",
				data: () => ({
					tags: {
						year: 2019,
						chassis: "GX90",
						model: "Cresta",
						make: "Toyota"
					},
					description: "Вам знакомо, когда...",
					name: "Toyota Cresta",
					cover_url: "projects/cresta/cresta-cover",
					slug: "cresta",
					images: [
						{ width: 2000, height: 1126, url: "projects/cresta/cresta-1" }
					]
				})
			}
		];

		const mockSnapshot = {
			docs: mockFirestoreData
		};

		const mockTotalSnapshot = {
			data: () => ({ count: 1 })
		};

		(getDocs as jest.Mock).mockResolvedValue(mockSnapshot);
		(getCountFromServer as jest.Mock).mockResolvedValue(mockTotalSnapshot);
		const result = await getProjects(mockParams);

		expect(collection).toHaveBeenCalledWith( db, 'projects');
		expect(getDocs).toHaveBeenCalled();
		expect(result).toEqual({
			fetchedProjects: [
				{
					id: 1,
					tags: {
						year: 2019,
						chassis: "GX90",
						model: "Cresta",
						make: "Toyota"
					},
					description: "Вам знакомо, когда...",
					name: "Toyota Cresta",
					cover_url: expect.any(String),
					slug: "cresta",
					images: [
						{ width: 2000, height: 1126, url: "projects/cresta/cresta-1" }
					]
				}
			],
			totalProjects: 1
		});
	})
})
