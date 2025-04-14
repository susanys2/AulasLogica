const prompt = require("prompt-sync")();

//Iteração sobre nossos vetores (arrays/listas)
let frutas = ['maçã', 'banana', 'abacaxi', 'uva'];
//Para iterar sobre um vetor utilizamos o FOR
for (let x = 0;  x < frutas.length; x++){
    console.log( `A fruta da posição ${x} é ${frutas[x]}`);
}
console.log(`FIM`);

//Iterando sobre uma lista usando o for OF
let listaJogadores = ['Pelé', 'Maradona', 'Messi', 'Ronaldo'];
for (let jogador of listaJogadores){
    console.log(`O jogador é: ${jogador}`);
} //variavel que recebe cada item da lista a cada volta (jogador)

let listaNumeros = [1, 2, 3, 4, 5]; //a lista de numeros aqui é apenas o VETOR
let soma = 0; //se colocassemos essa variavel dentro, daria erro, pois não conseguimos acessar ela fora dele
for ( let numero of listaNumeros){
    console.log(`O número é: ${numero}`)
    soma = numero + soma
}
console.log(soma)

//Verificando se um element existe em um array utilizando do INCLUDES - receber uma informação, ver item por item e ver se existe, retornando verdadeiro ou falso
let vogais = ['a', 'e', 'i', 'o', 'u'];
let letraParaVerificar = 'i' //aqui nos caso ele vai nos retornar verdadeiro
if (vogais.includes(letraParaVerificar)){
    //vogais.includes é uma função
    console.log(`A letra ${letraParaVerificar}, é uma vogal`) //deixamos fim de frase em cada condição
}else {
    console.log(`A letra ${letraParaVerificar}, não é uma vogal`)
}
console.log(`FIM`);

let vogais2 = ['a', 'e', 'i', 'o', 'u'];
let consoante = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k'];
let numero = (1, 2, 3, 4, 5, 6, 7, 8, 9)
let caractere = prompt(`Digite um caractere: `);
if (vogais2.includes(caractere.toLocaleLowerCase())){
    console.log(`O caractere ${caractere} é uma vogal`);
}


// posição           0        1          2        3   //lembrar sempre que é como um prédio
let listaFrutas = ['maçã', 'banana', 'abacaxi', 'uva'];
for (const [pos, fruta] of listaFrutas.entries()){ //esse novo negocio nos da a posição e a fruta
    console.log(`A ${fruta} é da posição ${pos}`); 
}

let produtos = "esmalte, creme, bodysplash"
let listaProdutos = produtos.split(",");
console.log(produtos); //o primeiro exibimos uma string
console.log(listaProdutos); //o segundo exibe uma lista

let texto = "Eu gosto de programar";
let texto2 = texto.split(",");
console.log(texto2);

//            01234
let escola = 'SENAI'; //a string é um vetor de CARACTERES, mas como assim? //MESMA COISA DE: ['s', 'e, 'n', 'a', 'i']
console.log(escola[0]); 
//conseguimos pegar cada letra
//conseguimos interagir com FOR pegando cada letra
for (let escola1 of escola){
    console.log(escola1);
}



