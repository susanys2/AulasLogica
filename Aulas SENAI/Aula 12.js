// variaveis compostas / vetores - abrays

//COMO UMA CASA, ONDE CONSEGUE LIDAR APENAS COM UMA FAMILIA EM SUA NORMALIDADE, AGORA EM UM PRÉDIO, CONSEGUIMOS LIDAR COM VÁRIAS





// Variaveiss simples, com um dado por vez
let fruta = "Maçã";  
fruta = "Banana"; //aqui é quando queremos modificar o que tem em nossa variavel 

// Variavel composta, varias informaçoes armazenadas em uma única variavel
// Cada uma com o índice iniciado de 0
let frutas = ["Maçã", "Banana", "Abacaxi", "Uva"]; //ENTENDER AS POSIÇOES DE CADA UM DESSES DADOS
console.log(frutas); // a maçã está no andar 0, a banana é 1, abacaxi 2, uva 3
console.log(frutas[1]); //olhe para tudo isso como um prédio de andares

// Declarando uma lista vazia
let listaVazia = []; //como se fosse um prédio sem nenhum morador
//pq colocariamos uma lista vazia? Para ir adicionando as coisas, como uma lista de compras.

//Declaração de uma lista de números
let numeros = [1, 2, 8, 5, 9];

//Declaração de uma lista de nomes - strings
let nomes = ["Ana", "João", "Maria"];

//Declaração de uma lista com mesclagem
let listaMista = [4, "feijão", 5, "arroz", true]; //considerado também um tipo de dado, assim como: STRING, NUMBER (INTEIRO), BOOLEAN

// Declaração de uma lista com outras listas
let listadeVetores = [["coca-cola", "hot-dog"], [5.00, "e", 10.00]]; //em cada colchete temos uma posição
console.log(listadeVetores[0] [1]) //quando nós adicionamos esse um, perguntamos: "Quem está no apartamento 0, na posição 1?"

// O QUE É UMA MATRIZ
//posiçoes das coisas []

//Aprendendo a atualizar seus dados
let frutas2 = ["Maçã", "Banana", "Abacaxi", "Uva"]; // a uva odiou o prédio e vai se mudar, a melancia vai entrar no seu lugar!
console.log(frutas2);                         
frutas2[3] = "Melancia" //ela está assumindo apenas uma posição do nosso prédio, um apartamnto dele
console.log(frutas2) //aqui no console ta mostrando essa alteração
console.log(`Olhaaaa, a uva se mudou!! Agora quem manda é a melancia! 😎`);

//Como conseguimos incluir um novo morador? - inserindo um novo item na lista
//PUSH - EMPURRAR
frutas2.push("Laranja"); // é MAIS ATUALIZADO E MAIS UTILIZADO apropriado para colocar sempre ao final uma informação
frutas2[4] = "Laranja"; //esse só seria usavel se sabemos qual é a posição ao qual queremos adicionar isso

//AGORA com o operador SPREAD ...
frutas2 = [...frutas2, "Laranja"] // o spread significa expalhar
// esse representa, colocar todo o seu conteudo dentro do seu vetor
// colocamos o vetor e adicionado LARANJA

// Quando queremos incluir em uma posição especifica
frutas2.splice(2,0, "Morango") // O MORANGO QUER ENTRAR NA POSIÇÃO 2 // O ZERO INDICA QUE NINGUEM SAI, SO MUDA // APOS ISSO TEMOS O MORANGO, INDICANDO O QUE QUEREMOS COLOCAR
console.log(frutas2)

frutas2.splice(3,0, "Kiwi", "Pera");
console.log(frutas2)

//Quando queremos remover um da lista
//usamos o splice so que para o contrário
frutas2.splice(3, 1);
console.log(frutas2); //aí aqui no caso, no terminal, nós excluimos o KIWI

frutas2.shift(); //tira o primeiro item da lista
frutas2.pop(); //tira o ultimo item da lista
console.log(frutas2);
// tirou a primeira fruta: MAÇÃ e a ultima (laranja duplicada sem querer).

frutas2 = ["Maçã", "Banana", "Morango", "Abacaxi", "Melancia", "Laranja", "Uva"];
console.log(frutas2[4]); // posição especifica
console.log(frutas2.slice(0,4)); //zero a posição e quatro a quantidade
console.log(frutas2.slice(1)); //mostrando da posição até a ultima
console.log(frutas2.slice(-1)); //numeros de itens do fim ao inicio
console.log(frutas2.length); //total de itens da lista
frutas2.sort() //ordena a lista de ordem crescente
console.log(frutas2)
frutas2.reverse() //ordenando de ordem decrescente
console.log(frutas2)