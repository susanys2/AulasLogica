const prompt = require("prompt-sync")(); //importando biblioteca para receber informaçao do usuario

//REVISAO DE VARIAVEIS

//declarando variavel sem dados (undefined)
let nota; // tem a variavel (a gavetinha) porem nao tem nenhum dado para ela
//declarando variavel com informaçao
let nome = "Susany"; //podemos usar tanto LET quanto VAR

//tudo isso significa que estamos criando um espaço na memoria do computador

//reatribuindo um valor para a variavel NOME, trocando seu valor
nome = "Roberto";
nota = 8.5; //o numero precisa ser separado por PONTO
let nome1 = prompt('Qual é o seu nome');
let sobrenome = prompt("Qual e o seu sobrenome?"); //todo o conteudo do prompt vem como string
let nota1 = Number(prompt("Digite a nota da primeira prova:"));
let nota2 = Number(prompt("Digite a nota da segunda prova:")); //entrada de dados no nosso programa

//porocessamento dos dados
let media = "nota1 + nota2" / 2;
let nomeCompleto = nome + " " + sobrenome; //mais facil para utilizar
let nomeCompleto2 = `${nome} ${sobrenome}`;
let idade = prompt('Digite a sua idade:'); // tudo o que estamos recebendo é sring
let idadeNumero = parseInt(idade);

//SAIDA DOS DADOS
console.log('---Relatorio Final---');
console.log(`o seu nome é: ${nomeCompleto} \n sua idade ${idade}`);
console.log(`o seu nome é: `+ nomeCompleto + `\n sua idade` + idade);
console.log(`sua media é: ${media}`);

let n = 0; //0
n = n + 1; //1
n = n + 1; //2
n = n + 1; //3
n += 1;    //4 //significa que quero pegar um valor e somar com mais UM
n ++;      //5 // pega o valor e soma mais um (especifico para isso, no caso um)
n += 3;    //8
n --;      //7
n = n - 1; //6
n -= 2;    //4





