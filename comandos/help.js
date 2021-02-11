const Discord = require('discord.js')

module.exports = {
    nombre: "help",
    alias: ["commands", "help me", "pls help"],
    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("AYUDA")
        .setColor("fdcf00")
        .setFooter(`Pedido por: ${message.author.username}${message.author.tag}`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .addField('`a!8ball`',' Haz una pregunta y te la respondo.', true)
        .addField('`a!avatar`',' Muestra tu avatar.', true)
        .addField('`a!baka`',' Llamas a alguien baka...', true)
        .addField('`a!banana`',' No, no, no. No te voy a decir que es esto.', true)
        .addField('`a!blush`',' Te pones como un tomate.', true)
        .addField('`a!bye`',' Ya tes vas?', true)
        .addField('`a!clap`',' Aplaudes a alguien, supongo.', true)
        .addField('`a!coin`',' Cara o cruz.', true)
        .addField('`a!fly`',' Vuela, vuela! Como si tuvieras las alas de Kanata.', true)
        .addField('`a!happy`',"I'm happy", true)
        .addField('`a!heal`',' Te has hecho daño?', true)
        .addField('`a!jump`',' Salta ^^', true)
        .addField('`a!kill`',' Oh NO! No lo hagas!', true)
        .addField('`a!kiss`',' Besa a una persona.', true)
        .addField('`a!like`',' Demuestra que te gusta algo!', true)
        .addField('`a!love`',' Demuestra que te gusta alguien.', true)
        .addField('`a!meme`',' Simplemente memes malos.', true)
        .addField('`a!pat`',' Pat, pat, pat...', true)
        .addField('`a!pout`',' Pon pucheritos.', true)
        .addField('`a!rate`',' Te doy una puntuación del 0 al 100.', true)
        .addField('`a!revive`',' Revive a alguien.', true)
        .addField('`a!rps`',' Piedra, papel o tijera!', true)
        .addField('`a!say`',' Digo lo que tú dices.', true)
        .addField('`a!shoot`','Nooo!', true)
        .addField('`a!sip`',' Bebe té.', true)
        .addField('`a!slap`',' Dale una bofetada a alguien.', true)
        .addField('`a!slepp`',' A mimir.', true)
        .addField('`a!spank`',' Dale un cachete a alguien.', true)
        .addField('`a!user`',' Mira tu info (o la de los demás).', true)
        return message.channel.send(embed)

    
    }
}