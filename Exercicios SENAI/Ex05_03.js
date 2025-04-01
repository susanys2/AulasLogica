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
    if (num %2 == 0){
        qtPares++
        somaPares = somaPares + num;
    } else {
        qtImpares++
    somaImpares = somaPares + num;
}
} 
console.log(`Voce digitou ${qtPares} n° pares, somadas resultou em ${somaPares}`);
console.log(`Voce digitou ${qtImpares} n° impares, somado resultou em ${somaImpares}`);          