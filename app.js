const TelegramBot = require('node-telegram-bot-api');
const token = '1121298328:AAGf2t_w9lmjYB4CLxBGafxT_oZfW-rE-xE';
const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/komanda/, (msg, match) => {

  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Возвращаю команду");
});


