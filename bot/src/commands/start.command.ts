import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
	constructor(bot: Telegraf<IBotContext>) {
		super(bot);
	}

	handle(): void {
		this.bot.start((ctx) => {
			console.log('Bot started!');

			ctx.reply(
				"Hi! Let's administrate web-page!\n\nSelect what you want to do",
				Markup.inlineKeyboard([
					[Markup.button.callback("Add project", "add_project")],
					[Markup.button.callback("Edit project", "edit_project")],
					[Markup.button.callback("Edit main", "edit_main")],
				])
			);
		});
	}
}