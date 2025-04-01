const prompt = require("prompt-sync")();

let quantidadeKm = 1000
let dias = 10
let precoDia = 60
let precoKm = 0.15
let valorKm = quantidadeKm * precoKm;
let valorDia = dias * precoDia;
console.log(`a quantidade de km rodados foi de ${valorKm} e a de dias percorridos ${valorDia}`);