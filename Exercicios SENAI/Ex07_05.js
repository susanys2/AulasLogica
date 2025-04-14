const prompt = require("prompt-sync")();

let listaNumeros = [3, 9, 6, 7, 0]; //a lista de numeros aqui é apenas o VETOR
 //se colocassemos essa variavel dentro, daria erro, pois não conseguimos acessar ela fora dele
for ( let numero of listaNumeros){
    console.log(`O número é: ${numero}`);
    dobro = numero*2
    console.log(`E seu dobro: ${dobro}`);
}

