const prompt = require("prompt-sync")();

let numero = prompt(`Digite o número de 1 a 7: `);
switch (numero){
    case "1":
        console.log('domingo');
    break;
        case "2":
        console.log('segunda');
    break;
        case "3":
        console.log('terça');
    break;
        case "4":
        console.log('quarta')
    break;
        case "5":
        console.log('quinta');
    break;
    case "6":
        console.log('sexta');
    break;
    default:
        console.log(`Voce não digitou o numero corretamente`)
    
    
}