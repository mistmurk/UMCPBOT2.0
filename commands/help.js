module.exports = {
  name: 'help',
  description: 'Displays information about the bot',
  usage: 'help (command)',
  aliases: [],
  args: true, // does this command take arguments?
  guildOnly: true, // does this command only work in a guild?
  adminOnly: false, // is this command only for admins?
  async execute(client, db, message, args) {
    if(args.length == 0) {
      var helptext = "```"
      client.commands.forEach(command => {
        if(!command.adminOnly) {
          helptext += command.name + ": \t" + command.description + "\n"
        }
      });
      helptext += "```\n"
      message.channel.send(helptext);
    } else {
      var command = client.commands.get(commandName)
      || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
      if(command) {
        var helptext = "```\n";
        helptext += command.name + '\n\n' + command.usage + '\n' + command.description;
        helptext += "\n```";
        message.channel.send(helptext);
      } else {
        message.channel.send('The requested command was not found.')
      }
    }
  },
}
