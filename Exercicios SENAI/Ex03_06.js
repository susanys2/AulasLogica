const prompt = require("prompt-sync")();

let salario = Number(prompt(`Digite o salário: `));
if (salario<=2000){
    let reajuste = salario+(salario*0.12)
    console.log(`Seu salário é ${reajuste}`)
} if(salario>2000 && salario<=4000){
    let reajuste = salario+(salario*0.10)
    console.log(`Seu salário é ${reajuste}`)
} else if (salario>4000){
    let reajuste = salario+(salario*0.08)
    console.log(`Seu salário é ${reajuste}`)
}