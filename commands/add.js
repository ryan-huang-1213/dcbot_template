const { SlashCommandBuilder } = require("discord.js");
// 你可以藉由該檔案學習到如何將兩個數字加起來
module.exports = {
    data: new SlashCommandBuilder()
        .setName("add")
        .setDescription("將提供的 a 和 b 相加")
        .addNumberOption((option) =>
            option.setName("a").setDescription("請輸入 a").setRequired(true),
        )
        .addNumberOption((option) =>
            option.setName("b").setDescription("請輸入 b").setRequired(true),
        ),
    async execute(client, interaction) {
        let a = interaction.options.getNumber("a"); //後面會教如何在使用斜線指令時輸入資料，這邊先記得是宣告 a b 然後將剛剛輸入的東西放進去
        let b = interaction.options.getNumber("b"); //後面會教如何在使用斜線指令時輸入資料，這邊先記得是宣告 a b 然後將剛剛輸入的東西放進去
        let ans = a + b;
        await interaction.reply(`${a} + ${b} = ${ans}`);
    },
};
