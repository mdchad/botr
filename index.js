var Bottr = require('bottr')
var BottrApp = require('bottr-app')

var bot = new Bottr.Bot()
bot.use(new BottrApp())

bot.on('message_received', function (message, session) {

  if (message === 'hello') {
    session.send('Hello World')

  }

  else if (messsage === 'how are you') {
    session.send('im good')
  }

  else {
    session.send('nice talking to you')
  }

})

bot.listen()
