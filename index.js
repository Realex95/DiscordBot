const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '-',
    owner: '352491753544351747',
    invite: 'https://discord.gg/fhYj9ahn', 
    invite: 'https://discord.gg/YE2T2qNG'
});

client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerGroup('music', 'Music')
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.server = {
    queue: [],
    currentVideo: {title:"Rien pour le moment", url: ""},
    dispatcher: null,
    connection: null
};


client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} -  (${client.user.id})`);
})

client.on('error', (error) => console.error(error));

client.login('OTUzNzUzNjkyODA3NTI0NDUz.YjJKWA.ZbRlC0VrAnw3NRMeEScXId-ASG8');