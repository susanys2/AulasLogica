const prompt = require(`prompt-sync`)();

let times = [
    "Atlético-MG",
    "Bahia",
    "Botafogo",
    "RB Bragantino", 
    "Ceará",
    "Corinthians",
    "Cruzeiro",
    "Flamengo",
    "Fluminense",
    "Fortaleza",
    "Grêmio",
    "Internacional",
    "Juventude",
    "Mirassol",
    "Palmeiras",
    "Santos",
    "São Paulo",
    "Sport",
    "Vasco da Gama", 
    "Vitória"
];

console.log(times[0], "É CAMPEÃO!!!!");
console.log(times.slice(0,4), "vão jogar a Libertadores!");
console.log(times.slice(-4), "estão rebaixados para a série B!");

