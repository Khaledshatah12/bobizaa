let handler = async (m, { conn }) => {

m.reply(`*قناتي على الواتساب:*\n
*https://whatsapp.com/channel/0029VaCoD2sAYlUSoRyroy1A*
*كل ما هوا عميق🖤.                               •‏ مبتور قلبي، بحاجة إلى أعوام من السلام حتى يعود كما كان🖤.*
اعدك سوف تجد ما يلامس قلبك هنا 🫂🖤🕯️
يوجد بوت تنزيل تطبيقات و اغاني يتم نشر رقمه يوميا🖤🕯️*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
