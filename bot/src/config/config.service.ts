import { config, DotenvParseOutput } from "dotenv";
import { IConfigService } from "./config.interface";
import * as admin from "firebase-admin";
import * as fs from "fs";

export class ConfigService implements IConfigService {
	private config: DotenvParseOutput;

	constructor() {
		const { error, parsed } = config();
		if (error) {
			throw new Error('Не найден файл .env');
		}
		if (!parsed) {
			throw new Error('Пустой файл .env');
		}
		this.config = parsed;

		this.initFirebaseAdmin();
	}

	get(key: string): string {
		const res = this.config[key];

		if (!res) {
			throw new Error(`Нет такого ключа: ${key}`);
		}

		return res;
	}

	// Добавляем метод для получения Firebase-конфигурации
	getFirebaseConfig(): {
		apiKey: string;
		authDomain: string;
		projectId: string;
		adminCredentials: string;
	} {
		return {
			apiKey: this.get("FIREBASE_API_KEY"),
			authDomain: this.get("FIREBASE_AUTH_DOMAIN"),
			projectId: this.get("FIREBASE_PROJECT_ID"),
			adminCredentials: this.get("FIREBASE_ADMIN_CREDENTIALS"),
		};
	}

	private initFirebaseAdmin() {
		if (admin.apps.length > 0) {
			console.log('Firebase Admin already started');

			return; // Firebase уже инициализирован, выходим из метода
		}

		const serviceAccountJson = this.getFirebaseConfig().adminCredentials;
		const projectId = this.getFirebaseConfig().projectId;

		if (!serviceAccountJson) {
			throw new Error("Отсутствуют креды Firebase в переменных окружения");
		}

		const serviceAccount = JSON.parse(serviceAccountJson);

		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			databaseURL: `https://${projectId}.firebaseio.com`,
		});
	}

	getFirestoreAdmin() {
		return admin.firestore();
	}

	// // Добавляем метод для получения Cloudinary-конфигурации (если нужно)
	// getCloudinaryConfig(): {
	//     cloudName: string;
	//     apiKey: string;
	//     apiSecret: string;
	// } {
	//     return {
	//         cloudName: this.get("CLOUDINARY_CLOUD_NAME"),
	//         apiKey: this.get("CLOUDINARY_API_KEY"),
	//         apiSecret: this.get("CLOUDINARY_API_SECRET"),
	//     };
	// }
}
