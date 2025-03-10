import { getMainPageData } from "./index";
import { db } from "@/fireBaseConfig";
import { collection, getDocs } from "firebase/firestore";

jest.mock('firebase/firestore');

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