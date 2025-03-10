import dotenv from 'dotenv';
dotenv.config();

jest.mock('firebase/analytics', () => ({
	getAnalytics: jest.fn(),
	isSupported: jest.fn().mockResolvedValue(false),
}));