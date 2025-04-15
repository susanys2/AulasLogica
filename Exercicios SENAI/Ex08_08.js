function SenhaAl(qtcaracteres){
    let listaCarecteres = ["!", "a", 5, "R", "$", "#"];
    let senha= '';
    
    for(let x=1; x<= qtcaracteres; x++){
        let posSorteada = Math.floor(Math.random()*6)
        senha= senha+listaCarecteres[posSorteada];
    }
    return senha;
}
let senhaGerada = SenhaAl(8);
console.log(senhaGerada);