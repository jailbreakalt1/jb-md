const { cmd, commands } = require("../command");
const config = require(`../config`);
cmd(
  {
    pattern: "menu",
    alise: ["list","help","what can you do"],
    react: "📜",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try{
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `👋 *Hello  ${pushname}*


| *MAIN COMMANDS* |
    ▫️.alive/ .online/ .jailbreak
    ▫️.menu/ .help/ .list
    ▫️
    ▫️
    ▫️
| *DOWNLOAD COMMANDS* |
    ▫️
    ▫️
    ▫️
| *GROUP COMMANDS* |

| *OWNER COMMANDS* |
    ▫️.restart
    ▫️.update
| *CONVERT COMMANDS* |
    ▫️
| *SEARCH COMMANDS* |



🥶𝐌𝐚𝐝𝐞 𝐛𝐲 Ryan 

> JAILBREAK MENU MSG
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/yss7v2.jpeg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
