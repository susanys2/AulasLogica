const prompt = require("prompt-sync")();
function valor1(numero){
    if(numero<=0){
        console.log(`Trata-se de um numero negativo`)
    } else{
        console.log(`Trata-se de um numero positivo`)
    }
}
valor1(0)