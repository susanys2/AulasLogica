const prompt = require("prompt-sync")();
function numerosImpares(){
for(let contador = 1; contador <= 50; contador++){
    if(contador%2==1){
        console.log(`Trata-se de um numero impar: ${contador}`)
}
}
}
numerosImpares()
