import { Telegraf } from "telegraf";
import LocalSession from "telegraf-session-local";
import { ConfigService } from "./config/config.service";
import { IConfigService } from "./config/config.interface";
import { IBotContext } from "./context/context.interface";
import { Command } from "./commands/command.class";
import { StartCommand } from "./commands/start.command";

// const bot = new Bot(process.env.BOT_TOKEN!)
// 	.command("start", (contetx) => {contetx.send("Hi! Let's administrate web-page! Use /help to learn available commands.")})
// 	.command("help", (contetx) => {contetx.send("Список доступных команд:\n/start — запустить бота\n/help — список команд\n/edit_main — редактировать главную страницу\n/manage_projects — управлять проектами")})

class Bot {
	bot: Telegraf<IBotContext>;

	commands: Command[] = [];

	constructor(private readonly configService: IConfigService) {
		this.bot = new Telegraf<IBotContext>(this.configService.get('BOT_TOKEN'));
		this.bot.use(
			new LocalSession({ database: "sessions.json" }).middleware()
		);
	}

	init() {
		this.commands = [
			new StartCommand(this.bot)
		];
		for (const command of this.commands) {
			command.handle();
		}
		this.bot.launch();
	}
}

const bot = new Bot(new ConfigService())

bot.init();
