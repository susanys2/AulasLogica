const prompt = require("prompt-sync")();

let nota1 = Number(prompt(`Digite o valor da primeira nota: `));
let nota2 = Number(prompt(`Digite o valor da segunda nota: `));
let media = (nota1 + nota2) / 2
if (media>=7){
    console.log(`Voce foi aprovado`);
 } else if(media>=5 && media<7){
    console.log(`Voce ficou de recuperação`);
 } else if(media<5){
    console.log(`Voce foi reprovado`);
 }
    