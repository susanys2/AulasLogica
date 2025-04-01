const prompt = require(`prompt-sync`)();
let qtPares = 0;
let qtImpares = 0;
let somaPares = 0;
let somaImpares = 0;
while (true){
    let num = Number(prompt(`Digite um número (coloque 0 para parar): `));

    if(num == 0){
        break;
    }
    if (num %2 == 0){ //par
        qtPares++ //quantidade de pares = quantPares + 1
        somaPares = somaPares + num; //aqui vamos somar o valor que eu te dei //somaPares+=num - pega um valor e concatena com uma variavel
    } else {//colocamos so o else, pois se nao for nenhum desses, é ele
    qtImpares++
    somaImpares = somaPares + num;
}
} 
console.log(`Voce digitou ${qtPares} n° pares, somadas resultou em ${somaPares}`);
console.log(`Voce digitou ${qtImpares} n° impares, somado resultou em ${somaImpares}`);          