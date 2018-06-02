const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START", "TYPING_STOP", "GUILD_SYNC", "RELATIONSHIP_ADD", "RELATIONSHIP_REMOVE", "USER_SETTINGS_UPDATE", "USER_NOTE_UPDATE"], reconnect: true });
const { readdirSync } = require("fs");

const startBot = async () => {
    const eventFiles = readdirSync("./events/");
    eventFiles.forEach(file => {
        const event = require(`./events/${file}`);
        bot.on(file.split(".")[0], (...args) => event(bot, ...args));
        delete require.cache[require.resolve(`./events/${file}`)];
    });

client.login(process.env.BOT_TOKEN);
