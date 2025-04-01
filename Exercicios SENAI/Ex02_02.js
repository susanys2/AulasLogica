const prompt = require("prompt-sync")();

let numero1 = Number(prompt(`Qual o valor do primeiro número?`));
let numero2 = Number(prompt(`Qual o valor do segundo número?`));
if(numero1>numero2){
    console.log(`O primeiro número é maior do que ${numero2}`);
} else{
    console.log(`O primeiro número é menor que o ${numero2}`);
}