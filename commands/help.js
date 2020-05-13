module.exports = {
  name: 'help',
  description: 'Displays information about the bot',
  usage: 'help (command)',
  aliases: [],
  args: false, // does this command take arguments?
  guildOnly: true, // does this command only work in a guild?
  adminOnly: false, // is this command only for admins?
  async execute(client, db, message, args) {
    if (args.length == 0) {
      await module.exports.list_all(client, message);
    } else {
      await module.exports.cmd_usage(client, message, args[0].toLowerCase());
    }
  },
  async list_all(client, message) {
    var helptext = "```\n"
    client.commands.forEach(command => {
      if(!command.adminOnly) {
        helptext += command.name + ":\n\t" + command.description + "\n"
      }
    });
    helptext += "```\n"
    message.channel.send(helptext);
  },
  async cmd_usage(client, message, name) {
    const cmd = client.commands.get(name)
    || client.commands.find(c => c.aliases && c.aliases.includes(name));
    if (cmd == null || cmd.adminOnly) return;

    var helptext = "```\n" + `${cmd.name}:\n`;
    // not all commands have specific usage syntax
    if (cmd.usage != null) helptext += `\tUsage: !${cmd.usage}\n\n`;
    helptext += `\t${cmd.description}` + "```\n";
    message.channel.send(helptext);
  },
}
