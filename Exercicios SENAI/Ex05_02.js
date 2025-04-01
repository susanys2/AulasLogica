const prompt = require(`prompt-sync`)();

for(let x = 1; x <= 6; x++){
    let num2 = Math.floor(Math.random()*60) + 1; //isso aqui é apenas para sortear um número de 1 a 60, aleatoriamente
    console.log(`Os numeros sorteados são: ${num2}`);
}
