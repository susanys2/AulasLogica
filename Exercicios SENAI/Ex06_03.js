const prompt = require(`prompt-sync`)();
let comidas = [] 
for(let x = 1; x<=6; x++){
    let comida = prompt(`Quais são as comidas?: `)
    comidas.push(comida);
}
console.log(comidas[0]);
console.log(comidas[4]);
comidas.push("Pure");
console.log(comidas);
comidas[7] = "Bife";
console.log(comidas);
comidas[5] = "Calabresa";
console.log(comidas);
comidas.shift();
console.log(comidas);
comidas.pop();
console.log(comidas);
console.log(comidas.slice(0,3));
console.log(comidas.slice(-4));
console.log(comidas.length);
comidas.reverse();
console.log(comidas);