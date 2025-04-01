const prompt = require("prompt-sync")();

let numero1 = Number(prompt(`Qual o valor do primeiro número?`));
let numero2 = Number(prompt(`Qual o valor do segundo número?`));
if(numero1==numero2){
    console.log(`Eles são iguais`);
} else{
    console.log(`Eles são diferentes`);
}