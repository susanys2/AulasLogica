const prompt = require("prompt-sync")();

let idade = Number(prompt(`Qual o ano em que voce nasceu?`));
if(idade<=2007){ 
    console.log(`Voce é maior de idade`)
} else{
    console.log(`Voce é menor de idade`)
}