const prompt = require("prompt-sync")();



function Saudacao(){
    let nome =(prompt(`Qual é o seu nome?: `))
    console.log(`Tenha um Bom Dia! ${nome}!`)
}
Saudacao() //repetimos aqui para ser perguntado 3 vezes, ele executa 3 vezes
Saudacao()
Saudacao()
