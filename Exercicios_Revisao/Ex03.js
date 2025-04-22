const prompt = require("prompt-sync")();

let numero1 = prompt(`Qual o valor do primeiro numero?: `);
let numero2 = prompt(`Qual o valor do segundo numero?: `);
let divisao = numero1/numero2
console.log(`A divisão entre os numeros deu ${divisao}`);