import { Context, Scenes } from "telegraf";
import { FirestoreService } from "../services/firestore.service";

export interface WizardState {
    collectionName: string;
    field: string;
    successMessage: string;
}

export interface IBotContext extends Context {
    scene: Scenes.SceneContextScene<IBotContext, Scenes.WizardSessionData>;
    wizard: Scenes.WizardContextWizard<IBotContext> & { state: WizardState };
    firestoreService: FirestoreService; // Добавляем firestoreService в контекст
}