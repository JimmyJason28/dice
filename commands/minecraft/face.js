const { Command } = require('discord.js-commando');

module.exports = class FaceCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'face',
			group: 'minecraft',
			memberName: 'face',
			description: 'Shows a front view of a Minecraft user\'s face.',
			aliases: ['minecraft-face', 'mc-face'],
			examples: ['face Notch'],
			clientPermissions: ['EMBED_LINKS'],
			throttling: {
				usages: 1,
				duration: 3
			},
			args: [{
				key: 'username',
				prompt: 'What user do you want to look up?',
				type: 'string'
			}]
		});
	}

	run(msg, { username }) {
		return msg.reply({
			embed: {
				author: {
					name: username,
					// eslint-disable-next-line camelcase
					icon_url: `https://minotar.net/helm/${encodeURIComponent(username)}`
				},
				image: { url: `https://minotar.net/helm/${encodeURIComponent(username)}` }
			}
		});
	}
};
