const prompt = require("prompt-sync")();

// OPERAÇOES COM VARIAVEIS

let n1 = 1 //nao ta aspas, então nao junta
let n2 = 2
let Soma = n1 + n2
console.log (Soma);

let multiplicacao = n1*n2
console.log(multiplicacao);

let subtracao = n1-n2
console.log(subtracao);

let divisao = n1/ n2
console.log(divisao);

let exponenciacao = n1**n2
console.log(exponenciacao);



//alterando valor variavel
let celular = 5000
let desconto = 50

celular = Number (prompt("qual e o valor do celular"));
desconto = Number(prompt("qual e o desconto em %"));
celular = celular - (celular* desconto/100);
console.log(`promocao celular de R$ ${desconto} de desconto, por apenas R ${celular}`); // ESSAS CRAZES VEM ANTES NA FRASE!!!!!!!!!!!
 
let numero = 4/2;
numero= numero**2;
numero = numero*(50-20);
console.log(`o valor do numero e:`,numero );
console.log(`o valor do numero e: ${numero}`);



//crie um algoritmo que obtenHa um numero, calcule o seu dobro e sua metade e exiba os valores calculados
 
 let number = 10
 let dobro = number*2
 let divide = number/2
 console.log(`o numero é ${number}, sua metade é ${divide} e o dobro é ${dobro}`);

// atv custo do pojeto
 let horas = 8*15
let custo = 100*horas 
console.log(`o custo do projeto sera de, ${custo}!!`);

//Resolução do exercicio com o PROFESSOR
let horasPorDia = 8;
let diasTrabalhados = 15;
let valorHora = 100;
let totalHoras = diasTrabalhados * horasPorDia;
let custoTotal = totalHoras * valorHora;
console.log(`O custo total é de R${custoTotal}`);


 