const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class TepsCommand extends Command {
    constructor(client) {
        super(client,{
            name: 'teps',
            group: 'music',
            memberName: 'teps',
            description: 'Dis toi à l instant jai larguer un brappeur avec mon uc ça à glisser le long de la rigole et avec le contact du pesli et de la chaise mes seufs on tremblé comme jaja'
        });
    }

    async run(message){
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            return message.say(':x: Tu dois être dans un salon vocal pour pouvoir utiliser cette commande')
        }

        return message.say("Dis toi à l'instant jai largué un brappeur avec mon uc ça à glissé le long de la rigole et avec le contact du pesli et de la chaise mes seufs on tremblé comme jaja");
    }
}