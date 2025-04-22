const prompt = require("prompt-sync")();
 let pessoa = prompt(`Voce é homem ou mulher (digite maiusculo)?: `);
 let altura = prompt(`Qual sua altura?: `);
 if(pessoa=="Mulher"){
     let pesoIdeal = (62.1*altura)-44.7
    console.log(`Trata-se de ${pesoIdeal} seu peso ideal`)
 } else if(pessoa=="Homem"){
    let pesoIdeal2 = (72.7*altura)-58
    console.log(`Trata-se de ${pesoIdeal2} seu peso ideal`)
 }