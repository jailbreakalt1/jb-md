const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "r1IHmTRb#dFH-1WiNmm3I8yco7pvdmLTItdnIdnZME50OENLMsSY",
  OWNER_NUM: process.env.OWNER_NUM || "263717456159",
  PREFIX: process.env.PREFIX || "/",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qhef7u.jpeg",
  ALIVE_MSG: process.env.ALIVE_MSG || "hey ${pushname} um up and running ,kinda wish I was alive thou",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "public", //private,public,inbox,groups
};
