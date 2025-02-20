import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";
import { MainPageData } from "../types/main";
import * as admin from "firebase-admin";
import { ConfigService } from "../config/config.service";

export class EditMainCommand extends Command {
	private db: FirebaseFirestore.Firestore;

	constructor(bot: Telegraf<IBotContext>) {
		super(bot);

		const configService = new ConfigService();
		this.db = configService.getFirestoreAdmin();
	}

	handle(): void {
		this.bot.action("edit_main", async (ctx) => {
			try {
				const mainCollection = this.db.collection("main");
				const snapshot = await mainCollection.get();

				if (snapshot.empty) {
					await ctx.reply("❌ Данные отсутствуют");
					return;
				}

				const mainData = snapshot.docs[0].data() as MainPageData;

				await ctx.replyWithHTML(
					`<b>Current main data:</b>\n\n` +
						`<b>Heading</b>: ${mainData.heading}\n\n` +
						`<b>Description</b>: ${mainData.description}\n\n` +
						`<b>Portrait</b>:\n
						[Desktop](${mainData.portrait.desktop})\n
						[Mobile](${mainData.portrait.mobile})
					`,
					Markup.inlineKeyboard([
						[Markup.button.callback("Edit heading", "edit_heading")],
						[Markup.button.callback("Edit description", "edit_description")],
					])
				);
			} catch (error) {
				console.error("Firebase error:", error);
				ctx.reply("❌ Ошибка при загрузке данных");
			}
		});

		this.bot.action("edit_heading", async (ctx) => {
			await ctx.reply("Пожалуйста, введите новый заголовок:");

			this.bot.on("text", async (ctx) => {
				const newHeading = ctx.message.text;

				try {
					const mainCollection = this.db.collection("main");
					const snapshot = await mainCollection.get();

					if (snapshot.empty) {
						await ctx.reply("❌ Данные отсутствуют");
						return;
					}

					const docId = snapshot.docs[0].id;

					await mainCollection.doc(docId).update({
						heading: newHeading,
					});

					await ctx.reply("✅ Заголовок успешно обновлен!");
				} catch (error) {
					console.error("Firebase error:", error);
					await ctx.reply("❌ Ошибка при обновлении заголовка");
				}
			});
		});
	}
}
