const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "r1IHmTRb#dFH-1WiNmm3I8yco7pvdmLTItdnIdnZME50OENLMsSY",
  OWNER_NUM: process.env.OWNER_NUM || "263717456159",
  PREFIX: process.envPREFIX || "/",
};
