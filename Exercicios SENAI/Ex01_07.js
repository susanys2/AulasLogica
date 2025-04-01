//minha resolução
let dinheiroCarteira = 500;
let dinheiroDollar = dinheiroCarteira / 5.78;
console.log(`o dinheiro que possui na carteira é ${dinheiroCarteira}, mas em dollar isso seria ${dinheiroDollar}`);

//resolução do professor
const prompt = require("prompt-sync")();
let reais = Number(prompt(`Quanto voce tem na carteira em reais?`));
let dolares = reais/5.78;
console.log(`Voce tem ${reais}, e convertendo, tem ${dolares.toFixed(2)} dolares.`); //esse .toFixed(2), arredonda para duas casa decimais!!!
//usando o .toFixed(0), nós arredondamos o valor.