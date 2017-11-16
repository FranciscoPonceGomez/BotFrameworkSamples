/*-----------------------------------------------------------------------------
A simple echo bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/

var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot. 
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

// Create your bot with a function to receive messages from the user
var bot = new builder.UniversalBot(connector);


// Intercept trigger event (ActivityTypes.Trigger)
//bot.on('trigger', function (message) {
    // handle message from trigger function
//    var queuedMessage = message.value;
//    var reply = new builder.Message()
//        .address(queuedMessage.address)
//        .text('This is coming from the trigger: ' + queuedMessage.text);
//    bot.send(reply);
//});

function userHasAnswered(session) {
    if (session.dialog)
}

// Handle message from user
bot.dialog('/', function (session) {
   builder.Prompts.text(session, `Who will be attending this meeting?`);
   
   setTimeout(() => {
   userHasAnswered(session);
   session.endConversation()
   }, 5000);


});