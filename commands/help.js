module.exports = {
  name: 'help',
  description: 'Displays information about the bot',
  usage: 'help (command)',
  aliases: [],
  args: false, // does this command take arguments?
  guildOnly: true, // does this command only work in a guild?
  adminOnly: false, // is this command only for admins?
  async execute(client, db, message, args) {
    var helptext = "```"
    client.commands.forEach(command => {
      if(!command.adminOnly) {
        helptext += command.name + ":\n\t" + command.description + "\n"
      }
    });
    helptext += "```\n"
    message.channel.send(helptext);
  },
}
