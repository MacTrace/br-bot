var heals = 0;

module.exports = {
    name: 'heals',
    description: 'Heal pool',
    args: true,
    usage: '<amount>',
    execute(message, args) {
      const amount = parseInt(args[0]);
      if (isNaN(amount)) {
        message.channel.send('That doesn\'t seem to be a valid number.');
      }
      else {
        heals += amount;
        message.channel.send(`Added ${amount} heals - New count : ${heals}`);
      }
    }
};
