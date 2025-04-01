const prompt = require("prompt-sync")();

//Estruturas condicionais aninhadas

let valorCompra = 120;
let clienteVIP = true; //boolean
if(valorCompra>=100){
    if(clienteVIP==true){
        console.log(`Voce ganhou R$ ${valorCompra*0.1}`); //ou pode ser 10/100 = 10%
    } else{
        let desconto = valorCompra*5/100
        console.log(`Voce ganhou R$ ${desconto} de desconto`);
    }
    

} else{ //quando não tivermos vai aparecer essa mensagem
    let restante = 100-valorCompra;
    console.log(`Compre mais ${restante} e ganhe desconto`);
}



//EXERCICIO
// abaixo de 16 nao pode votar
// 18 - 70 obrigado a vota
// >16 e <18 seu voto é facultativo
// >70 facultativo tambem


let idade = Number(prompt(`Qual é a sua idade?`)); //variavel onde pode ser mudada, pois estamos perguntando, ela não é fixa
if (idade<16){ // as chaves servem para delimitar regras //se a resposta for TRUE ele vai exibir no console
    console.log(`Voce nao pode votar`);
}  else{
    if(idade>=18 && idade<=70){
        console.log(`Voto obrigatório`);
    } else {
        console.log(`Voto facultativo`);
    }
}   

//Switch Case
// torna o código mais organizado e legivel diante de muitos IF ELSE (opçoes para serem verificadas)

let n1 = Number(prompt(`Digite o 1° número:`));
let n2 = Number(prompt(`Digite outro número:`));
let op = prompt(`Digite o operador (+ - / * **):`);
switch (op){
    case  '+':             //if (op==`+`)
        console.log(n1+n2);
        break;
        case '-':
            console.log(n1-n2);
            break;
            case '/':      //else if
                console.log(n1/n2);
                break;
                case '*':
                console.log(n1*n2);
                break;
                case '**':
                    console.log(n1**n2);
                    break;
                    default:
                        console.log(`Operador invalido`);
                
}


    




   