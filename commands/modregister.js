const fs = require('fs');

module.exports = {
    name: 'modregister',
    description: '',
    arg: true,
    usage: '<user>',
    execute(message, args) {
      const taggedUser = message.mentions.users.first();
      const name = taggedUser.username;

      var users = require('./users.json');

      if(!users.includes(name)){
        users.push(name);

        var json = JSON.stringify(users);

        fs.writeFile("./users.json", json, 'utf8', function(err){
          if(err){
            return console.log(err);
          }
        });

        message.channel.send("You\'re all set, you can now enlist.");
      }
      else {
        message.channel.send("You\'re already registered (you only need to do this once).");
      }
 }
};
