//minnha resolução
let altura = 10
let largula = 5
let area = 10*5
let tinta = 2
let pintura = area/tinta
console.log(`a quantidade de tinta necessaria para a pintura é ${pintura}`);

//resolução do professor
const prompt = require("prompt-sync")();
let altura2 = Number(prompt(`Qual é a sua altura?`));
let largura2 = Number(prompt(`Qual a sua largura?`));
let area2 = altura2 * largura2
let redndimento = 2;
let litros = area/redndimento;
console.log(`Para pintar um espaço de ${area2}m2 é necessario ${litros}L de tinta.`);
//estamos oferecendo informaçoes e montando uma conta por traz de tudo isso, como um conversor virtual de valores.
