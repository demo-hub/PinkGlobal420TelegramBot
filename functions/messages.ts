export function sendMessageToChannel(bot: any, message: string, chatId: any) {
    bot.sendMessage(chatId, message)
}

export function sendPhotoToChannel(bot: any, photoUrl: string, chatId: any) {
    bot.sendPhoto(chatId, photoUrl)
}