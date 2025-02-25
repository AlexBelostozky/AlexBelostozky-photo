import { Scenes, Telegraf, Markup } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";
import { MainPageData } from "../types/main";
import { FirestoreService } from "../services/firestore.service";

// Создаем сцену для редактирования
const editFieldScene = new Scenes.WizardScene<IBotContext>(
    "EDIT_FIELD_SCENE",
    async (ctx) => {
        await ctx.reply("Пожалуйста, введите новое значение:");
        return ctx.wizard.next();
    },
    async (ctx) => {
        // Проверяем, что ctx.message существует и это текстовое сообщение
        if (!ctx.message || !("text" in ctx.message)) {
            await ctx.reply("❌ Пожалуйста, отправьте текстовое сообщение.");
            return ctx.scene.reenter(); // Повторяем сцену
        }

        const newValue = ctx.message.text;
        const { collectionName, field, successMessage } = ctx.wizard.state;

		console.log("Updating field:", { collectionName, field, newValue });

        try {
            const docId = await ctx.firestoreService.getFirstDocId(collectionName);
            await ctx.firestoreService.updateDocumentField(collectionName, docId, field, newValue);
            await ctx.reply(`✅ ${successMessage}`);
        } catch (error) {
            console.error("Firebase error:", error);
            await ctx.reply(`❌ Ошибка при обновлении ${field}`);
        }

        return ctx.scene.leave();
    }
);

export class EditMainCommand extends Command {
    private firestoreService: FirestoreService;

    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
        this.firestoreService = new FirestoreService();

        // Передаем firestoreService в контекст
        bot.use((ctx, next) => {
            ctx.firestoreService = this.firestoreService;
            return next();
        });

        // Регистрируем сцену
        const stage = new Scenes.Stage<IBotContext>([editFieldScene]);
        bot.use(stage.middleware()); // Добавляем Stage в бота
    }

    handle(): void {
        this.bot.action("edit_main", async (ctx) => {
            try {
                const mainData = (await ctx.firestoreService.getCollectionData("main"))[0] as MainPageData;

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
			await ctx.scene.enter("EDIT_FIELD_SCENE"); // Входим в сцену

            ctx.wizard.state = {
                collectionName: "main",
                field: "heading",
                successMessage: "Заголовок успешно обновлен!",
            };

        });

        this.bot.action("edit_description", async (ctx) => {
            await ctx.scene.enter("EDIT_FIELD_SCENE"); // Входим в сцену

			ctx.wizard.state = {
                collectionName: "main",
                field: "description",
                successMessage: "Описание успешно обновлено!",
            };
        });
    }
}
