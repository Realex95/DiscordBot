const { VoiceConnection } = require('discord.js');
const { Command, CommandoMessage } = require("discord.js-commando");
const ytdl = require('ytdl-core');
const { StreamDispatcher } = require('discord.js');

module.exports = class PauseCommand extends Command {
    constructor(client) {
        super(client,{
            name: 'pause',
            group: 'music',
            memberName: 'pause',
            description: 'Met en pause votre musique',

        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query
     */
    async run(message){
        /**
         * @type StreamDispatcher
         */
         const dispatcher = message.client.server.dispatcher;

        if (!message.member.voice.channel) {
            return message.say(':x: Tu dois être dans un salon vocal pour pouvoir utiliser cette commande')
        }

        if (!message.client.voice.connections.first()){
            return message.say(":x: Je ne suis pas connecté à un salon vocal. Tape `-join` pour m'ajouter")
        }

        if (dispatcher){
            dispatcher.pause();
        }

        return message.say(":pause_button: Pause :thumbsup");
    }
}