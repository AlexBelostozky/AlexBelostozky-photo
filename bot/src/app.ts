import { Telegraf } from "telegraf";
import LocalSession from "telegraf-session-local";
import { ConfigService } from "./config/config.service";
import { IConfigService } from "./config/config.interface";
import { IBotContext } from "./context/context.interface";
import { Command } from "./commands/command.class";
import { StartCommand } from "./commands/start.command";
import { EditMainCommand } from "./commands/editMain.command";

class Bot {
    bot: Telegraf<IBotContext>;
    commands: Command[] = [];

    constructor(private readonly configService: IConfigService) {
        this.bot = new Telegraf<IBotContext>(this.configService.get("BOT_TOKEN"));

        // Инициализация сессии
        const session = new LocalSession({ database: "sessions.json" });
        this.bot.use(session.middleware());
    }

    init() {
        this.commands = [
            new StartCommand(this.bot),
            new EditMainCommand(this.bot),
        ];
        for (const command of this.commands) {
            command.handle();
        }
        this.bot.launch();
    }
}

const bot = new Bot(new ConfigService());
bot.init();