const prompt = require("prompt-sync")();

let contador = 10; //pois estamos partindo da contagem regressiva
while(contador>=0){ 
    console.log(`O contador está no n° ${contador}`);
    contador--; // contador = contador + 1
}
//ele meio que faz assim olha: 
// o contador vale 10, certo?
// então ele coloca a condição de, se o contador for maior ou igual a 0
// ele pega, joga pro final e soma com mais um
// fazendo uma ordem decrescente
