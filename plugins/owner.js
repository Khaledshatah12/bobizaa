import _0x5cf0df from "node-fetch";
let handler = async (_0x5b1cf6, {
  conn: _0x3223e4
}) => {
  let _0x41e9b3 = "\n*「 معلومات عن صاحب البوت 」*\n\n*`رقم صاحب البوت`:*\n```+963980677944```\n\n*ستو🖤ــرـــ🖤ـيـات🙈🖤:*\n```https://whatsapp.com/channel/0029VaCoD2sAYlUSoRyroy1A```\n\n*`؏ـبارات نرجـسـيـة༻`*\n```https://whatsapp.com/channel/0029VaMDsQWGU3BBoFnLur2s```\n\n*`ستو💙ــرـــ💙ـيـات🙈💙` :* ```https://chat.whatsapp.com/JxU1p4KoH671xSGkhB1DFN```\n\n".trim();
  _0x5b1cf6.reply(_0x41e9b3);
};
handler.help = ["owner"];
handler.tags = ["infobot"];
handler.command = /^(owner)$/i;
handler.limit = false;
export default handler;
