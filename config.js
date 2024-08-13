module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN || 'MTI3MjY3MTA5NjE5NzM0OTUyMA.GokRtU.grG_MB4f7M1qf-Du_UwWA46IS5cxXIAgfO8FWA',
        playing: 'Accred Music 🔮',
        global: true,
        guild: process.env.GUILD_ID || 'xxx',
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        enableEmojis: true,
    },

    emojis:{
        'back': '⏪',
        'skip': '⏩',
        'ResumePause': '⏯️',
        'savetrack': '💾',
        'volumeUp': '🔊',
        'volumeDown': '🔉',
        'loop': '🔁',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 86400,
        leaveOnEnd: false,
        leaveOnEndCooldown: 86400,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
