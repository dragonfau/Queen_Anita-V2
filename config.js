//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "true";
global.video = "true";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Tanzania";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "255675233245";
global.sudo = process.env.SUDO || "env.SUDO";
global.owner = process.env.OWNER_NUMBER || "255675233245";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hYUkJNcTg4QU4vc0hQR3hVbnd4TmdjWlh5MDhySVFqL3N4VHUxZi8zQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHJFbTdGOENtc3daRHZ3Zk9oTnB1K2xyc3JNcTcwVGI1Z0pOeVpmNHIwST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSDZENHhRNmpBKzRDSTJhWmdDQXRVK3Q0ZTBVaDBiQmVjNkdhTm8xalgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFMThMSG03eUozdzArSUMrTWtyaFV0a3RZcXlubkZmcXJhRGhWTFFyckI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRJM1BZeUhYVFdwSDQxYnZTSTRLRkZBRGJaMFdQMk5ldS9hbldHUVQwVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxEQ21KenhaaTZwNGNNUGRhaDVHTGxGdW0zSEpCVHBvakdySkpIRkJhV009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0FIUUdjSDhJZm5pZjdOOWYwV2Z4dEpodnBuZlZNcXYzWnN4UlhuUDFVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTC9xMWkvaVVVWXR0dkVheFNiQkR1SURBV1hOb3VEbFg2T0cxQVk1Ykx6MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik53ZXZSaXJ6VFFldXZvYXlKeVUxZlNoVVBkSmZJMm9hRzhUb2o3VndYUW9lMHRSbDZPVVlQd1pNemRyczJ2WWJUemE3bWczUmxLL1lZZDhMQncxSmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJaaE5kTlJXSzJpU1h2dHVSTXJ2NVdEaUJxSVdUdTBzUm5sdG9qMHRPVnFjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZRWw4bWxhN1Q0S2pSdWQxeDZ0WjlBIiwicGhvbmVJZCI6Ijc3MjdjYjY2LTQyZTUtNDJiYi1hNWNiLTgxMmRkZGYyZjMxYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5dlpRaG96bS9WWElVYmI3Z21Mc3NYZFlmSEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRG9sK3NzWHFDaHArdUhlOTJ1MEloT2xCaGRJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpBUFNBWkFCIiwibWUiOnsiaWQiOiIyNTU3MTY1MjY4NTI6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEM3c3YwQkVNR1NpTFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN2xlby8xeGUyMjNIQWo2UnVKRGhBTzRFVE9ERGc2R2FGWUxjc2tuZm4wYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSWRiWUdySlU2dVJQeWVJaTg3RnFIclY4eVE1cHgrL3B1Q2gwNzdVdHdFU1lFQUp4VmR0d1FwODg3MmFZZnJ0ZU5ZVzJuWmVjcE1IV2c2NHlmMVlGQnc9PSIsImRldmljZVNpZ25hdHVyZSI6InowaG5oZFZqQm5Sd0NtNzYrRlNxcTJyOUVlcldXaUhLRlA0ZXk0OTdwejR6NURGNkQxRWFURnBwY0F6OTlhcW1oWnJ5RzNINTFjWkg2TThta0FnTGhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzE2NTI2ODUyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZTVYcVA5Y1h0dHR4d0kra2JpUTRRRHVCRXpndzRPaG1oV0MzTEpKMzU5SCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTg5NTI0NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQdkoifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`nuryah dragon™`",
  author: process.env.PACK_AUTHER || "dragon",
  packname: process.env.PACK_NAME || "nuryah",
  botname: process.env.BOT_NAME || "dragon bot",
  ownername: process.env.OWNER_NAME || "Dragon",
  errorChat: process.env.ERROR_CHAT || "true",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "true",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
