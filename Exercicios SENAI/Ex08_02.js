const prompt = require("prompt-sync")();

//estamos trabalhando com parametros
function ParImpar (numero){ //nao sabemos o numero aqui, é um X
if (numero %2==0){
    console.log(`Trata-se de um número par`, numero)
} else{
 console.log(`Trata´se de um número impar`, numero)
}
}
ParImpar(3) //aqui estamos recebendo o valor desse X
ParImpar(5)
ParImpar(8)