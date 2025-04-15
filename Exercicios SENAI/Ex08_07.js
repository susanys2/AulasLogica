function Soma(nr1, nr2){
    console.log(nr1+nr2);
}
function sub(nr1, nr2){
    console.log(nr1-nr2);
}
function div(nr1, nr2){
    console.log(nr1/nr2);
}
function mult(nr1, nr2){
    console.log(nr1*nr2);
}
function Calcular(nr1,nr2,op){
    if (op==`+`){
        Soma( nr1,nr2)
} else if (op==`-`){
    sub( nr1,nr2)
} else if (op==`/`){
    div( nr1,nr2)
} else if (op==`*`){
    mult( nr1,nr2)

}
}
Calcular(18,4, "+")