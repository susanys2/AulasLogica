const prompt = require("prompt-sync")();

let anoAtual = Number(prompt(`Qual o ano atual em que estamos?: `)); //pula um espaço para, no terminal, nao precisarmos pular e dar erro
let anoNascimento = Number(prompt(`Qual o ano de seu nascimento?: `));
let idade = anoAtual-anoNascimento
if (idade<=10){ //aqui nesse negocio nao pode colocar ponto e virgula e depois a chave
    console.log(`Voce é uma crianca`);
} else{
    if(idade>10 && idade<=17){ //&& está trazendo duas condiçoes
        console.log(`Voce e um adolescente`); //todas as condiçoes precisam ser validas, para entrar aqui
 } else{
    if(idade>18 && idade<=59){
        console.log(`Voce é um adulto`)
    } else
    console.log(`Voce é idoso`)
 
}
} //tudo vai depender muito da forma como voce está escrevendo seu codigo
