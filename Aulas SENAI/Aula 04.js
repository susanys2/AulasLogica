const prompt = require("prompt-sync")();
// criação de uma variável
// a mesma serve para armazenamento de uma informação ou de um valor
// o VAR é como se ele estivesse reservando um espaço
// o memória crie um espaço com o nome do curso e receba o valor de 'desenvolvimento de sistemas'
// ctrl + aspas para abrir o terminal pelo teclado
var curso = "desenvolvimento de sistemas";

//exibindo o conteúdo da variável
console.log("curso"); // aqui tratamos de uma STRING
console.log(curso); // jeito correto de usar uma variável
console.log("curso", curso);

// criando e atribuindo valores a uma váriavel 
var idade = 15; //inteira // integer (em ingles)
var temperatura = 24.5; //real // float
var nome = "susany"; //string

console.log('Ola, ', nome, ' voce tem ', idade, 'anos')
console.log('esta cursando', curso, 'hoje faz', temperatura, '°C');

console.log('Ola, ' + nome + ' voce tem ' + idade + 'anos')
console.log('esta cursando'+ curso + 'hoje faz'+ temperatura + '°C');


// Template string
// utilizo a crase ^^ para criar uma string
// para colocar váriaveis dentro da string, utilizo $(variavel)
console.log(`Olá, ${nome} voce tem ${idade} anos esta cursando ${curso}`)


       
// declarando uma variável lógica/boolean (true/false)

var podeDirigir
var estaChovendo

// declarando uma variavel nula
var escola; 


//EXERCICIO

//nota1 - valido
//nomeCompleto - valido
//Nome Completo - valido
//media - invalido
//console - invalido
//_salario - valido
//9dade - invalido
//minha_variavel - valido
//var - invalido
//valor$ - invalido
//nome-completo - invalido
//escola_ - valido
//TELEFONE - valido
//true - invalido

let cidade = 'Andradina' // declarando
var turma = "2°B" // declarando
const ano = 2025

console.log(turma)
turma = "3°B" // reatribuindo o valor de uma variavel
console.log(turma);
// ano = 2025 //nao podemos reatribuir valor a uma constante

let _nome = "suzyzinha" //como se estivesse armazenando na nossa memoria ram
let _idade = 15
let _peso = 68

console.log(_nome, _idade, _peso);
console.log(`voce tem ${_idade} ${_nome} e tambem pesa ${_peso} kilos`) 

//mostrando o console quais sao os tipos de dados
console.log(typeof _nome, typeof _idade, typeof _peso);

//no prompt o computador espera o usuario digitar uma informacao
//sempre quando recebemos uma informacao de entrada ela vem em STRING
_nome = prompt('Qual e o nome');
_idade = prompt('Qual e a idade');
_peso = prompt("Qual e o peso");
console.log(_nome, _idade, _peso);

console.log(typeof _nome, typeof _idade, typeof _peso);

//criem duas variaveis num1 e num2 e recebam as informacoes pelo prompt - estamos convertendo tambem

let num1 = 1
let num2 = 2
num1 = prompt ("qual e o 1n°");
num2 = prompt ("qual e o 2n°");

console.log(typeof num1); //string
num1 = Number( typeof num1); // aqui estamos convertendo a string para o number 
console.log(typeof num1); //number
console.log(typeof num2);
num2 = Number(typeof num2);
console.log(typeof num2);

//receber as informacoes ja convertendo seu tipo de dados
let nr1 = Number (prompt(`digite o primeiro numero`)); //number
console.log(num1 + num2);

//convertendo os dados para uma variavel
nr1 = "100.14"; //string
nr1 = Number("100.14"); //strang para number
nr1 = parseInt("100.14"); //string para integer/inteiro
nr1 = parseFloat("100") //string para float 100.00
nr1 = string (100.14); // convertendo um number para string

_nome = prompt('Qual e o nome'); //string
_idade = prompt('Qual e a idade'); //int
_peso = prompt("Qual e o peso"); //float/meio quebrado - peso
console.log(_nome, _idade, _peso);

_nome = prompt('Qual e o nome'); //continuou, pois e uma string
_idade = parseInt(prompt(`qual e o peso`)); //mudou para int
_peso = parseFloat(prompt(`qual e o peso`)); //mudou para float
console.log(_nome, _idade, _peso);





