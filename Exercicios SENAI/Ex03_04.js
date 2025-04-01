const prompt = require("prompt-sync")();

let nomeMes = (prompt(`Digite o nome de um mes: `)); //assim, não tem como ser a mesma condição ao mesmo tempo.
if (nomeMes = nomeMes=="janeiro"|| nomeMes=="março"|| nomeMes== "maio"|| nomeMes=="julho" || nomeMes== "agosto"||nomeMes=="outubro"|| nomeMes=="dezembro" ){
    console.log(`Esse mes possui 31 dias`)//usamos || ao inves de &&, pois se não todas as condiçoes precisam ser verificadas, para ser 31 dias.
} else if (nomeMes == "abril" || nomeMes == "junho" || nomeMes =="setembro" || nomeMes == "novembro"){
    console.log(`Esse mes possui 30 dias`);
} else if ( nomeMes = "fevereiro") {
    console.log(`Esse mes possui 28 dias`);
} else {
    console.log(`Voce não digitou corretamente o mes`);
}
