const prompt = require("prompt-sync")();

let velocidade = Number(prompt(`Qual a velocidade do carro?`));
if(velocidade>80){
    console.log(`multado`);
} else{ 
    console.log(`não multado`);
}

let multa = Number(prompt(`qual o valor fixo da multa?`));
let custo = (velocidade - 80) * multa
console.log(`o custo da multa ficou ${custo}`);


// = é igual a atribuição