
const prompt = require("prompt-sync")();
//Operadores Relacionais
// == quer dizer igual, igualdade
// != quer dizer diferente
let a = 2;
let b = 3;
console.log(a>b); //essa expressão é falsa, pois 2 não é maior que 3.
console.log(a==b); //falso
console.log(a!=b); // verdadeiro
console.log(a>2); //falso
console.log(a>=2); //verdadeiro

//if é uma estrutura de condição muito utilizada na programação
let tenhoIngresso = true;
if(tenhoIngresso == true){ //como se fosse a referencia de um conteudo. Se a condição for verdadeira 
    //entra nesse bloco de comando
    //caso contrário não entrará
    console.log(`Posso entrar no show`);
}

//ATV - blocos de comando
let idade = Number(prompt(`Qual é a sua idade?`)); //não está o valor fixo, como antes, pois estamos perguntando
if(idade >= 18){ //IF quer dizer SE..
    console.log(`É maior de idade`);
}
if(idade >=18){
    console.log(`E também pode dirigir!!`);
}
//TODA CONDIÇÃO EM JAVASCRIPT NOS PRECISAMOS DEIXAR EM PARENTESES.

let tenhoIngresso2 = false;
if(tenhoIngresso2 == true){
    console.log(`Posso entrar no show`);
} else { //E o ELSE quer dizer SE NÃO..
    console.log(`Estou barrado na portaria`);
}

let idade2 = Number(prompt(`Qual é a sua idade?`)); //não está o valor fixo, como antes, pois estamos perguntando
if(idade2 >= 18){ 
    console.log(`É maior de idade`);
}
else {
    console.log(`É menor de idade`)

}


