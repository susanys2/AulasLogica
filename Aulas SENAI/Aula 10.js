//ESTRUTURA DE LAÇO DE REPETIÇÃO: WHILE

const prompt = require("prompt-sync")();
//Exemplo 01
let resposta = "S"; //se a resposta for sim, esta aqui, caso não, não
if (resposta == "S"){ //aqui estamos colocando que a resposta é S
    console.log(`Voce está dentro do bloco`);
}
console.log(`FIM`);

//Exemplo 02
let resposta2 = "Sim"; //já aqui ele vai ficar em um laço de repetição infinita
while (resposta2 == "Sim"){ //como se fizemos o if varias vezes
    console.log(`Voce está dentro do bloco`);
    resposta2 = prompt(`Deseja continuar? Sim/Nao: `); //FAZEMOS ALT + SETINHA, PARA COLOCAR PARA CIMA OU PARA BAIXO
}
console.log(`FIM`);

//Exemplo 03
let senhaSecreta = "SENAI"
let senhaDigitada
while(senhaSecreta!=senhaDigitada){
    console.log(`Descubra a senha secreta`);
    senhaDigitada = prompt(`Qual é a senha?: `)
}
console.log(`FIM`); 

//Exemplo 04: Se quisermos colocar um número base para TANTAS repetiçoes, nós criamos uma variavel para delimitar quanto será repetido.
let contador = 1;
while(contador<=5){ //vai executar isso até que seja falso
    console.log(`O contador está no n° ${contador}`);
    contador = contador + 1;
}
//
let contador2 = 1;
while(contador2<=5){ //vai executar isso até que seja falso
    console.log(`O contador está no n° ${contador}`);
    contador2++; //exatamente o mesmo de: contador2 = contador2 + 1
}

//let contador2 = 1; - QUANDO APARECER UM EXERCICIO QUE DEMANDA ISSO
//while(contador2>=5){ //vai executar isso até que seja falso
    //console.log(`O contador está no n° ${contador}`);
   // contador2++; //exatamente o mesmo de: contador2 = contador2 + 1


//EXERCICIO - PROFESSOR - EXEMPLO 05
//posso deixar meu laço executando sem uma condição especifica, apenas com while(true) e exncerrar o loop com o comando BREAK
let total = 0;
let quantP = 0;
while(true){//não temos aqui uma condição, sempre será TRUE
    let valor = Number(prompt(`Digite o valor do produto (0 para encerrar): `));
    if (valor == 0) { // a chave indica um bloco de comando
        break;
    } else {
        total = valor + total; //pois estamos adicionando o valor de um produto a um total que inicialmente era 0
        quantP++; //pois queremos adicionar mais um cada vez que nós passarmos algo 
        // ou quantP = quantP + 1;
    }

}
console.log(`Voce comprou no total ${quantP} produtos`);
console.log(`valor total da compra R$ ${total.toFixed(2)}`);
//quantos números pares ele tem, cria no computador e soma quantos números