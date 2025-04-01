const prompt = require("prompt-sync")();
//operadores lógicos
// !  &&  ||
// sendo respectivamente de
// não
// e
// ou
//se as duas condiçoes forem atendidas pode entrar!!

let a = 2;
let b = 3;
let c = 5;
console.log(a>2 && b<2); // falso pois apenas um é V
console.log(a>1 && b<2); // falso, pois apenas um é V
console.log(a>1 && b<4); // true pq ambas sao V
console.log(a>1 && b<4 && c>4); // uma condição que voce já nega, todas as outras vão ser descartadas no "e'"4
console.log(a>1 && b<4 && c>5); // false

console.log(a>2 || b<2); // vai nos mostral false, pois apenas uma condição é verdadeira
console.log(a>1 || b<2);// true pelo menos um é
console.log(a>1 || b>4); // true pelo menos um é
console.log(a>1 || b>4); //true

console.log(a>1 && b<4 || c>4); //true
//         true    true   true
//          = verdadeiro

console.log(a>1 && b<4 || c>6); //true
//         true    true   false
//          = true   = false
//                   = true

//CALCULO DE IMC
// com 4 posiveis respostas

let altura = Number(prompt("Digite sua altura")); //esse Number é pq a gente tá convertendo em number realmente
let peso = Number(prompt("Digite seu peso"));
let imc = peso/(altura**2); //não preciso colocar parenteses, mas caso quiser
if (imc < 18.5){
    console.log(`Voce está abaixo do peso ideal`);
} else if( imc> 18.5 && imc < 24.5 ){
    console.log(`Voce está com o peso ideial`);
} else if( imc> 25 && imc < 29.9){ 
    console.log(`Voce está com sobrepeso`);
} else if( imc > 30){
    console.log (`Voce está com obesidade`); 
} //sempre que formos colocar uma condição a mais



//CONSTRUA UM ALGORITMO QUE RECEBA O VALOR DE 3 LADOS DE UM TRIANGULO E VERIFIQUE SE ELE É UM TRIANGULO EQUILATERO OU ESCALENO
let lado1 = Number(prompt(`Digite o valor do primeiro lado`));
let lado2 = Number(prompt(`Digite o valor do segundo lado`));
let lado3 = Number(prompt(`Digite o valor do terceiro lado`));
if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1){
    console.log(`É um triangulo equilatero`);
} else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
    console.log(`É um triangulo escaleno`);
} else {
    console.log(`É um triangulo isosceles`);
}

// UTILIZANDO O || - significa "OU" or
console.log(a>2 || b<2);


let vendas = Number(prompt(`Qual o valor das vendas?`));
let horas = Number(prompt(`Qual foi a quantidade de horas trabalhadas?`));
if (vendas>=5000 || horas>40){
    console.log(`Voce ganhará um bonus`);
} else if (vendas<5000 || horas<40){
    console.log(`Voce não ganhará um bonus`);
}
let caractere =(prompt(`Receba uma letra: `));
if (caractere == "a" || caractere == "e" || caractere == "i" || caractere == "o" || caractere == "u"){
    console.log(`É uma vogal`);
} else{ 
    console.log(`Não é uma vogal`);
} 

