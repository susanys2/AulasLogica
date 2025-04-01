//ESTRUTURA DE LAÇO DE REPETIÇÃO FOR
const prompt = require(`prompt-sync`)();

for(let contador = 1; contador <= 5; contador++){
    console.log(contador);
}

for(let contador = 5; contador <= 50; contador+=3){ //++ soma 1 //+= 3 - tres em tres
    console.log("O contador é",contador);
} //neste for iniciamos a partir do numero 5 até o numero 50
//incrementando de 3 em 3 no computador

//utilizando o break para parar o for
for(let contador = 1; contador <= 500; contador++){
    console.log(contador);
    if (contador == 50){
        break;
    }
}


console.log(`Entregando os notebooks`);
for(let nr = 1; nr <=32; nr++){
    let nome = prompt(`Quem é o n° ${nr}?: `);
    let presente = prompt(`O (a) ${nome} está presente?: `)
    if (presente == "sim"){
        console.log(`Pegar o notebook ${nr}`);
        console.log(`Levar o notebook até o(a) ${nome}`);
    } else{
        console.log(`Não pegar o notebook ${nr}`);
    }
}

//TABUADA COM FOR - tabuada do 6
let numero = 6
for (let contador = 1; contador <= 10; contador++){ //isso vai ser meio que padrão para quando quisermos.
    console.log(`${numero} x ${contador} = ${numero*contador}`);


}