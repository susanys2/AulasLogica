const prompt = require("prompt-sync")();

let ganhoHora = prompt(`Quanto voce ganha por hora?: `);
let horas = prompt(`Quantidade de horas trabalhadas no mes: `);
let total = horas*ganhoHora
console.log(`O valor do salario total é ${total}!`)