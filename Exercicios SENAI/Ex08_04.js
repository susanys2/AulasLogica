const prompt = require("prompt-sync")();

coresPri=["azul","amarelo","vermelho"]
function ExibirCoresPrimarias(){
    for (let cor of coresPri)
        console.log(`A cor é ${cor}`)
        
}
ExibirCoresPrimarias()