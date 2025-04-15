//Escopo de variáveis
//Variavel global pode ser acessada em qualquer lugar
//Variavel local so pode ser acessada dentro do bloco

//utilizando variaveis global
function NomeEscola(){
    let escola = "SESI'";
    console.log(`Valor fora da função:${escola}`);
}
let escola = "SENAI"
console.log(`Valor fora da função: ${escola}`);
NomeEscola();
console.log(`Valor após a função: ${escola}`);


var escola2 = 'SENAI'
function NomeEscola2(){
    let escola2 = "SESI'";
    console.log(`Valor fora da função:${escola2}`);
}
var escola2 = "SENAI"
console.log(`Valor fora da função: ${escola2}`);
NomeEscola2();
console.log(`Valor após a função: ${escola2}`);

//documentando funçoes usando o JSdoc
/** 
 * soma de dois numeros
 * @param {number} a - Primeiro numero
 * @param {number} b - Segundo numero
 * @param {number} - Soma de dois numeros

*/
function Soma (a,b){
    return a+b;
}
Soma(2,4);
