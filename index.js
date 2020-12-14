var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot(token, {polling: true});
require('dotenv').config();

var token = process.env.Token;

var items = [
    {Key: "hi", Value: "Sup!"},
    {Key: "name", Value: "Muscular Nerd!"},
    {Key: "", Value: ""},
    {Key: "", Value: ""},
    {Key: "", Value: ""},
    {Key: "", Value: ""}
];

bot.onText(/\/start/, (msg) => {   
    var chatId = msg.chat.id;
    // var echo = match[1];
    var start = `Welcome to Muscular Nerd!!
    \nYour one stop for technological excellence.
    \nType /help for more info.
    `;
    bot.sendMessage(chatId, start);
});

bot.onText(/\/help/, (msg) => {   
    var chatId = msg.chat.id;
    // var echo = match[1];
    var help = `Welcome to Muscular Nerd!
    \n"/echo *MSG*" - To Repeat your message
    \n"/get *MSG*" - To get items
    `;

    bot.sendMessage(chatId, help);
});

// bot.onText(/\/echo (.+)/, (msg, match) => {   
//     var chatId = msg.chat.id;
//     var echo = match[1];
//     bot.sendMessage(chatId, echo);
// });

bot.onText(/\/get (.+)/, (msg, match) => {   
    var chatId = msg.chat.id;
    var echo = match[1];
    echo = echo.trim().toLowerCase();
    let item = items.find(x=> x.Key == echo);
    let result = item.Value;

    if (result == null || result == undefined || result == ''){
        result = "Sorry, didnt get that!! Try something else";
    }

    bot.sendMessage(chatId, result);
});


// bot.on('message', (msg) => {
//     var chatId = msg.chat.id;
   
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
// });