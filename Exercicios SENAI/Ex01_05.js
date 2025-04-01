//minha resolução
let valorMetros = 100
let valorCentimetros = 10000
let valorMilimetros = 100000
let valorKm = 0.1
console.log(`o valor em metro é ${valorMetros}, em centimetros é ${valorCentimetros}, em milimetros é ${valorCentimetros} e por fim, em Km é ${valorKm}`);


//resolução do professor
const prompt = require("prompt-sync")();
let metros = Number(prompt(`Digite uma media em metros:`));
let cm = metros * 100;
let mm = metros * 1000;
let km = metros / 1000;
console.log(`${metros} é ${cm} centimetros, é ${mm} milimetros e ${km} em quilometros`); //aqui é quando conseguimos colocar informaçoes dentro de uma escrita.