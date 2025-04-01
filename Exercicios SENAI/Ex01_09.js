const prompt = require("prompt-sync")();

//minha resolução
let precoInicial = 1000;
let valorDesconto = 5;
let calculo = 5/100
let desconto = calculo * precoInicial
console.log(`o valor do desconto em um produto de 1000, vai ser igual a ${desconto}`);


//resolução do professor
let preco = Number(prompt(`Qual é o valor do preço inicial?`));
let desconto2 = Number(prompt(`Qual o valor do desconto adquirido?`));
let calculo2 = desconto2/100
let calculo1 = calculo2 * preco
console.log(`O valor de desconto, em ${preco}, será de ${calculo1}`);



