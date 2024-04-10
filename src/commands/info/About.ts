import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

import { Command, Context, Lavamusic } from '../../structures/index.js';

export default class About extends Command {
    constructor(client: Lavamusic) {
        super(client, {
            name: 'about',
            description: {
                content: 'Shows information about the bot',
                examples: ['about'],
                usage: 'about',
            },
            category: 'info',
            aliases: ['ab'],
            cooldown: 3,
            args: false,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: false,
                client: ['SendMessages', 'ViewChannel', 'EmbedLinks'],
                user: [],
            },
            slashCommand: true,
            options: [],
        });
    }

    public async run(client: Lavamusic, ctx: Context): Promise<any> {
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel('Invite Lavamusic')
                .setStyle(ButtonStyle.Link)
                .setURL(
                    `https://discord.com/api/oauth2/authorize?client_id=${client.config.clientId}&permissions=8&scope=bot%20applications.commands`
                ),
            new ButtonBuilder()
                .setLabel('Support Server')
                .setStyle(ButtonStyle.Link)
                .setURL('https://discord.gg/ns8CTk9J3e')
        );

        const embed = this.client
            .embed()
            .setAuthor({
                name: 'LavaMusic',
                iconURL:
                    'https://media.discordapp.net/attachments/876035356460462090/888434725235097610/20210820_124325.png',
            })
            .setThumbnail(
                'https://media.discordapp.net/attachments/876035356460462090/888434725235097610/20210820_124325.png'
            )
            .setColor(this.client.color.main)
            .addFields([
                {
                    name: 'Creator',
                    value: '[Blacky#9125](https://github.com/appujet)',
                    inline: true,
                },
                {
                    name: 'Repository',
                    value: '[Here](https://github.com/appujet/lavamusic)',
                    inline: true,
                },
                {
                    name: 'Support',
                    value: '[Here](https://discord.gg/ns8CTk9J3e)',
                    inline: true,
                },
                {
                    name: '\u200b',
                    value: `He really wanted to make his first open source project ever for more coding experience. In this project, he was challenged to make a project with less bugs. Hope you enjoy using LavaMusic!`,
                    inline: true,
                },
            ]);
        return await ctx.sendMessage({
            content: '',
            embeds: [embed],
            components: [row],
        });
    }
}
