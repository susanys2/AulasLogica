const prompt = require("prompt-sync")();

let venda = Number(prompt(`Quanto vendeu esse mes?`));
if(venda>=5000){
    let comissao1 = 5/100 * venda
    console.log(`sua comissão será de ${comissao1}`);
} else{
    let comissao2 = 3/100 * venda
    console.log(`sua comissão será de ${comissao2}`);
}

