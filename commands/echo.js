const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("echo")
        .setDescription("因為很重要所以要說 n 遍")
        .addNumberOption((option) =>
            option.setName("n").setDescription("enter the n").setRequired(true),
        )
        .addStringOption((option) =>
            option.setName("想說的話").setDescription("輸入你想要重複的話").setRequired(true),
        ),
    async execute(client, interaction) {
        let a = interaction.options.getString("想說的話");
        let n = interaction.options.getNumber("n");
        if (n <= 0) {
            await interaction.reply(`抱歉，我想${n}應該不是正常的數字`);
            return;
        }
        await interaction.reply("hi");
        for (let i = 1; i <= n; i++) {
            interaction.followUp(`${i}. 你剛剛說的是 "${a}" 嗎?`);
        }
    },
};
