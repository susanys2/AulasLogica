const prompt = require("prompt-sync")();

let numero = Number(prompt(`Qual o valor do número?`));
if(numero>0){ 
    console.log(`Esse número é positivo`);
} else{
    console.log(`Esse número é negativo`);
}