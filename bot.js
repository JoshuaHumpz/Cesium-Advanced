const Discord = require("discord.js");
const { readdirSync } = require("fs");

const startBot = async () => {
    const file.event(DISCORD)
    const eventFiles = readdirSync("./events/");
    eventFiles.forEach(file => {
        const event = require(`./events/${file}`);
        bot.on(file.split(".")[0], (...args) => event(bot, ...args));
        delete require.cache[require.resolve(`./events/${file}`)];
    });

bot.login(process.env.BOT_TOKEN);
