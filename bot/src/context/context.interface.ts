import { Context } from "telegraf";

export interface SessionData {
	waitingForHeading: boolean;
	editingDocId: string | null;
}

export interface IBotContext extends Context {
	session: SessionData;
}