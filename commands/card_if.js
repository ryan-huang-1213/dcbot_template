const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("card_if")
        .setDescription("計算出兩人的牌誰比較大")
        .addNumberOption((option) =>
            option.setName("長_利奧拉").setDescription("輸入利奧拉的牌有多長").setRequired(true),
        )
        .addNumberOption((option) =>
            option.setName("寬_利奧拉").setDescription("輸入利奧拉的牌有多寬").setRequired(true),
        )
        .addNumberOption((option) =>
            option.setName("長_史考特").setDescription("輸入史考特的牌有多長").setRequired(true),
        )
        .addNumberOption((option) =>
            option.setName("寬_史考特").setDescription("輸入史考特的牌有多寬").setRequired(true),
        ),
    async execute(client, interaction) {
        let a = interaction.options.getNumber("長_利奧拉"); // 已經幫你們宣告好變數了，這裡不需要改
        let b = interaction.options.getNumber("寬_利奧拉"); // 已經幫你們宣告好變數了，這裡不需要改
        let c = interaction.options.getNumber("長_史考特"); // 已經幫你們宣告好變數了，這裡不需要改
        let d = interaction.options.getNumber("寬_史考特"); // 已經幫你們宣告好變數了，這裡不需要改
        let bmi = a - b * b; // 公式好像怪怪的，應該要如何更改呢?
        if (bmi < 18.5) {
            // 如何判斷 大或小
            await interaction.reply(`體重過輕 bmi=${bmi}`); // 如果符合，應該回覆甚麼訊息
        } else if (bmi >= 18.5 && bmi < 24) {
            // 應該要如何判斷剩下的
            await interaction.reply(`體重適中 bmi=${bmi}`); // 如果符合，應該回覆甚麼訊息
        } else {
            // 最後一個應該是甚麼情況
            await interaction.reply(`體重過重 bmi=${bmi}`); // 如果符合，應該回覆甚麼訊息
        }
    },
};
