import { Telegraf } from "telegraf";
import { IBotContext } from "../../context/context.interface";
import { FirestoreService } from "../../services/firestore.service";

export abstract class EditBaseCommand {
    protected firestoreService: FirestoreService;

    constructor(protected bot: Telegraf<IBotContext>) {
        this.firestoreService = new FirestoreService();
    }

    // Общая логика для редактирования поля
    protected async editField(
        ctx: any,
        collectionName: string,
        field: string,
        successMessage: string
    ) {
        await ctx.reply(`Пожалуйста, введите новое значение для ${field}:`);

        this.bot.on("text", async (ctx) => {
            const newValue = ctx.message.text;

            try {
                const docId = await this.firestoreService.getFirstDocId(collectionName);
                await this.firestoreService.updateDocumentField(collectionName, docId, field, newValue);
                await ctx.reply(`✅ ${successMessage}`);
            } catch (error) {
                console.error("Firebase error:", error);
                await ctx.reply(`❌ Ошибка при обновлении ${field}`);
            }
        });
    }
}
