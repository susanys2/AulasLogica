const prompt = require("prompt-sync")();

let ganhoHora = prompt(`Quanto voce ganha por hora?: `);
let horasMes = prompt(`Qual o numero de horas por mes?: `)
let totalSalario = (ganhoHora*horasMes) 
let imposto = (totalSalario/100)*11
let INSS = (totalSalario/100)*8
let sindicato = (totalSalario/100)*5
let liquido = (totalSalario-imposto-INSS-sindicato);
console.log(`Salário bruto é ${totalSalario}`);
console.log(`Imposto é ${imposto}`);
console.log(`INSS é ${INSS}`);
console.log(`Sindicato é ${sindicato}`);
console.log(`Salário liquido é ${liquido}`);


