const prompt = require("prompt-sync")();

let nota1 = Number(prompt(`Qual o valor da primeira nota?`));
let nota2 = Number(prompt(`Qual o valor da segunda nota?`));
let media = (nota1 + nota2)/ 2;
console.log(`Sua média é igual a ${media}`);
if(media>=7){
    console.log(`Voce foi aprovado!`);
} else{ 
    console.log(`Voce foi reprovado!!`);
}