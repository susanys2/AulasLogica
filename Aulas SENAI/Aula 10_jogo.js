const prompt = require(`prompt-sync`)();
console.log("============================");
console.log("😜  Jogo da adivinhação  😜");
console.log("============================");

let nrSecreto = Math.floor(Math.random()*100) + 1; //esse vezes é até que número queremos chegar //o um vai gerar um número de 1 até 100
let acertou = false; //quando queremos fazer varias vezes a mesma coisa, eu entramos dentro do bloco
let tentativas = 0; //pois não tem comos chegarmos com tentativas né
while(acertou==false){ //enquanto a variavel acertou for falsa ---- usamos while p/ um numero indeterminado
    let chute = Number(prompt(`Digite um numero entre 1 e 100: `)); //se não pularmos um espaço aqui, vai constar como um caracter, caso pule no terminal
    tentativas++; //tentativas = tentativas + 1
    if (chute == nrSecreto){
        console.log(`Parabens!! Voce acertou!! Em ${tentativas} tentativas 💋💋`)
        acertou = true; //meio que fechamos aqui, colocamos após ele acertar
    } else if (chute > nrSecreto){
        console.log(`Voce chutou ${chute}, muito alto! Tente um pouco menos.. 👀`);
    } else if (chute < nrSecreto){ //ou poderiamos deixar apenas ELSE
        console.log(`Tente um numero maior!! 😒`)
    }
}
console.log(`FIM 🤩`);
