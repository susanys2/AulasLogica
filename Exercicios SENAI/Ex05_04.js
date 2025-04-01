const prompt = require(`prompt-sync`)();
let inicio = Number(prompt(`Digite o inicio: `)); //qual número voce quer?
let fim = Number(prompt(`Digite o final: `)); //voce quer que ele vá até onde?
let passo = Number(prompt(`Digite o passo: `)); // de quanto em qanto voce quer que ele pule?
for (let x = inicio; x <= fim; x+=passo){
    console.log(x);
}
