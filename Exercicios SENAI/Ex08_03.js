const prompt = require("prompt-sync")();

function FormatarData (dia, mes, ano){
    let Dataformatada = `${dia}/${mes}/${ano}`;
    return Dataformatada;

}
let data = FormatarData(22, 6, 2009);
console.log(data);
console.log(FormatarData(8,8,2006));