import * as admin from "firebase-admin";

export class FirestoreService {
    private db: admin.firestore.Firestore;

    constructor() {
        this.db = admin.firestore();
    }

    // Получить данные из коллекции
    async getCollectionData(collectionName: string): Promise<any[]> {
        const snapshot = await this.db.collection(collectionName).get();
        if (snapshot.empty) {
            throw new Error("Данные отсутствуют");
        }
        return snapshot.docs.map((doc) => doc.data());
    }

    // Обновить поле в документе
    async updateDocumentField(
        collectionName: string,
        docId: string,
        field: string,
        value: any
    ): Promise<void> {
        await this.db.collection(collectionName).doc(docId).update({
            [field]: value,
        });
    }

    // Получить ID первого документа в коллекции
    async getFirstDocId(collectionName: string): Promise<string> {
        const snapshot = await this.db.collection(collectionName).get();
        if (snapshot.empty) {
            throw new Error("Данные отсутствуют");
        }
        return snapshot.docs[0].id;
    }
}