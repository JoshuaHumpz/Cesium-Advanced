const Discord = require("discord.js");
const { readdirSync } = requeventFiles
import required (Float64Array)

const startBot = async () => {
    const eventFiles = readdirSync("./eventFiles");
    eventFiles.forEach(file => {
        const event = require(`./events/${file}`);
        bot.on(file.split(".")[0], (...args) => event(bot, ...args));
        delete require.cache[require.resolve(`./events/${file}`)];
    });

bot.login(process.env.BOT_TOKEN);
