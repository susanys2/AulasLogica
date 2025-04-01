// 1 - crie 4 variaveis ja atribuindo valores e exiba elas no console

// nomeAluno
// Altura
// Escola
// AnoAtual

let nomeAluno = "susany"
let altura = 73 
let escola = 'SESI'
let AnoAtual = 2025


// 2 - crie de um professor
let nomeProfessor = "gabriela"
let materiaProfessor = "sociologia"
let anoIngresso = 2025


//  3 - var nome aluno recebe valor - aqui estamis realizando, para mostrar no computador e modificar o mesmo 
nomeAluno = prompt("qual e o nome");
altura = parseFloat(prompt("qual e a altura"));
escola = prompt("qual e a escola");
AnoAtual = parseInt(prompt("qual e o ano"));


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


