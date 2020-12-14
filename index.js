var TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

var token = process.env.Token;
let bot_name = process.env.bot_name;
var bot = new TelegramBot(token, {polling: true});

var items = [
    {Key: "hi", Value: "Sup!"},
    {Key: "name", Value: bot_name+"!"},
    {Key: "", Value: ""},
    {Key: "", Value: ""},
    {Key: "", Value: ""},
    {Key: "", Value: ""}
];

bot.onText(/\/start/, (msg) => {   
    var chatId = msg.chat.id;
    // var echo = match[1];
    var start = `Welcome to ${bot_name}!!
    \nYour one stop for technological excellence.
    \nType /help for more info.
    `;
    bot.sendMessage(chatId, start);
});

bot.onText(/\/help/, (msg) => {   
    var chatId = msg.chat.id;
    // var echo = match[1];
    var help = `Welcome to ${bot_name}!
    \n"/echo *MSG*" - To Repeat your message
    \n"/get *MSG*" - To get items
    `;

    bot.sendMessage(chatId, help);
});

bot.onText(/\/notes/, (msg) => {   
    var chatId = msg.chat.id;
    // var echo = match[1];
    var help = `List of notes in ${bot_name}:
        - abdulbari
        - back2backswe_lectures
        - bestdsques
        - educative_lec
        - faang
        - gate_notes
        - interviewcamp
        - leetcodeques
        - lockedques
        - webdev `;

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