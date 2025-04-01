const prompt = require("prompt-sync")();

let numero = Number(prompt(`Qual o valor do número?`));
if(numero%2==0){ 
    console.log(`Esse número é par`);
} else{
    console.log(`Esse número é impar`);
}