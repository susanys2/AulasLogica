function Linha(){
    console.log('🤎🤎🤎🤎🤎🤎🤎');
}
Linha();

//FUNÇÃO SEM PARAMETRO E SEM RETORNO
function Cabecalho(){
    Linha();
    console.log('  SESI/SENAI');
    Linha();
}


function CabecalhoEscola(nomeEscola){
    Linha();
    console.log(nomeEscola);
    Linha();
} //COMO FAZEMOS PARA RECEBER ESSE NOME DE ESCOLA COMO PARAMETRO? - colocando ali no meio do parenteses e executando embaixo
CabecalhoEscola(`    UNESP`)
CabecalhoEscola(`    SESI`)


function Soma(nr1,nr2){
let resultado = nr1+nr2
console.log(resultado);
}
Soma(5,8)
Soma(28293823,939289)


//FUNÇÃO COM PARAMETROS E COM RETORNO
function Media (n1, n2){
    let resultado = (n1+n2)/2;
    return resultado; //calculando a media e retornando ela
}
let valor = Media(4,6); //estamos chamando nossa função e mandando ela fazer isso, ao inves de atribuir logo de cara
console.log(valor)
