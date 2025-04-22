const prompt = require("prompt-sync")();

let letraDigitada = prompt(`Qual a letra?: `)
if(letraDigitada=="F"){
    console.log(`Trata-se do sexo feminino`)
} else if (letraDigitada=="M"){
    console.log(`Trata-se do sexo masculino`)
} else{
    console.log(`Sexo invalido`)
}