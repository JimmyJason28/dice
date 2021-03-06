// Copyright 2018 Jonah Snider

const { Command } = require('discord.js-commando');

module.exports = class VoteCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'vote',
			group: 'single',
			memberName: 'vote',
			description: 'Vote once per day and get double your daily.',
			throttling: {
				usages: 1,
				duration: 3
			}
		});
	}

	run(msg) {
		msg.reply('🗳 https://discordbots.org/bot/388191157869477888/vote');
	}
};
