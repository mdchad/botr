var Bottr = require('bottr')
var BottrApp = require('bottr-app')

var bot = new Bottr.Bot()
bot.use(new BottrApp())


bot.on('message_received', function (message, session) {
  session.send('Hello World')
})



  // var vals = Object.keys(message).map(function(key) {
  //   return message[key];
  // });
  //
  // console.log(vals[0])
  // if ( vals[0] === 'hello' || 'hi') {
  //   session.send('Hello Human')
  //
  // } else {
  //   session.send('i dont understand you question')
  // }

  // if ( vals[0] === 'Who are you' || 'Who are you?') {
  //   session.send('I am the god of all bots. Bow to me you filthy human')
  // }

  // if ( vals[0] === 'What is your name?' || 'What is your name') {
  //   session.send('My name is Jarvis. I am your personal assistant.')
  // }
  //
  // if ( vals[0] === 'Can you help me' || 'can you help me?') {
  //   session.send('What do you want me to do human?')
  // }
  //
  // if ( vals[0] === 'Where are you from' || 'where are you from?') {
  //   session.send('I was born in General Assembly. My creator is Irsyad. We only accept his commands. ')
  // }
  //
  // if ( vals[0] === 'Do you eat' || 'Do you eat?') {
  //   session.send('I dont need to eat. Unlike humans, we are powerful and not weak.')
  // }
  //
  // else {
  //   session.send('I dont understand your question.')
  // }

// })

bot.listen()
