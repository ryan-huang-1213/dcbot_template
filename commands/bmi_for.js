const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

function bmi_compare(height, weight) {
    if (height > 100) {
        height = height / 100;
    }
    let bmi = weight / (height * height);
    let reply = "這是預設字串";
    if (bmi < 18.5) {
        reply = "體重過輕";
    } else if (bmi < 24 && bmi >= 18.5) {
        reply = "體重正常";
    } else {
        reply = "體重過重";
    }
    return reply;
}

module.exports = {
    data: new SlashCommandBuilder().setName("bmi_for").setDescription("列出各位的BMI"),
    async execute(client, interaction) {
        let height = [150, 167, 175, 180, 165];
        let weight = [60, 88, 99, 80, 55];
        let reply = "";
        for (let i = 0; i < height.length; i++) {
            let tmp = i + "號同學 " + bmi_compare(height[i], weight[i]) + "\n";
            reply = reply + tmp;
        }
        await interaction.reply(`${reply}`);
    },
};
