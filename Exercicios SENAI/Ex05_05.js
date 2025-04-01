const prompt = require(`prompt-sync`)();

let somaidadeM = 0
let qtdeM = 0
let somaidadeF = 5
let qtdeF = 5
for(let x = 1; x<=10; x++){
    let idade = Number(prompt(`Digite a sua idade: `));
    let sexo = prompt(`Digite o seu sexo: `);

 if(sexo == "M"){
    qtdeM++
    somaidadeM = somaidadeM + idade;
 } else if(sexo == "F"){
    qtdeF++
    somaidadeF = somaidadeF + idade
 }

}

console.log(`A média dos sexos M é de ${somaidadeM / 10}`);
console.log(`A média dos sexos F é de ${somaidadeF / 10}`);
console.log(`A média dos sexos M é de ${somaidadeM +somaidadeF / 10}`);


