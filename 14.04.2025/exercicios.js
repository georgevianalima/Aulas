//Crie uma função chamada saudacao que exibe uma mensagem de saudação no console. A mensagem deve ser "Olá, Mundo!".

function saudacao(a) {
    console.log(`Olá Mundo!`);   
    
}
saudacao()

//Função de saudação personalizada: Crie uma função chamada saudacaoPersonalizada que recebe um nome como parâmetro e exibe no console a mensagem: "Olá, [nome]!". Teste a função com diferentes nomes.

function saudacaoPersonalizada(nome) {
    console.log(`Olá, ${nome}`);   
    
}
saudacaoPersonalizada("Manox")

//Crie uma função chamada concatenar que recebe dois parâmetros, sendo um string e um número, e retorna uma string com a concatenação desses dois parâmetros.

function concatenar(string,numero) {
    console.log(`${string} + numero`);
    
    
}
console.log("Manox",2);

//Escreva uma função chamada soma que aceita dois números como parâmetros e retorna a soma deles.

function soma(a,b) {
    console.log(a+b);
    
    
}

soma(2,9)

// Função de subtração: Crie uma função chamada subtrair que recebe dois parâmetros (números) e retorna a diferença entre eles.

function subtracao(a,b) {
    console.log(a-b);
    
}

subtracao(4,3)

//Função de multiplicação: Crie uma função chamada multiplicar que recebe dois parâmetros (números) e retorna o resultado da multiplicação desses números.

function multiplicacao(a,b) {
    console.log(a*b);
    
    
}
multiplicacao(2,2)

//Função de dividir e verificar erro: Crie uma função chamada dividir que recebe dois números como parâmetros. Ela deve retornar o resultado da divisão, mas, caso o divisor seja zero, deve retornar uma mensagem de erro dizendo: "Divisão por zero não é permitida".


function dividir(a,b) {
    if (b === 0) {
        console.log("Divisão por zero não é permitida");       
    }else{
        console.log(a/b);
        
    }
    
}

dividir(1,1)

//- Função de verificar se um número é par ou ímpar: Crie uma função chamada verificarParOuImpar que recebe um número como parâmetro e retorna uma mensagem dizendo se o número é "Par" ou "Ímpar".

function verificarParOuImpar(a) {
    if (a %2 === 0) {
        console.log("Número par");
        
    }else{
        console.log("Número ímpar");
        
    }
    
}
verificarParOuImpar(12)

//-Crie uma função chamada verificarMaioridade que recebe a idade de uma pessoa e retorna uma mensagem dizendo se ela é maior ou menor de idade. A maioridade é aos 18 anos.

function verificarMaioridade(idade) {
    if (idade >= 18) {
        console.log("Você é maior de idade");
        
    }else{
        console.log("Você é menor de idade!");
        
    }
    
}
verificarMaioridade(17)

//Escreva uma função chamada maiorNumero que aceita três números como parâmetros e retorna o maior deles.

function maiorNumero(a,b,c) {
    if (a >= b && a >= c) {
        console.log(`O número ${a} é o maior de todos`);    
        
    }else if (b >= a && b >= c) {
        console.log(`O número ${b} é o maior de todos`);      
        
    } else{
        console.log(`O número ${c} é o maior de todos`);
        
    }
}
maiorNumero(1,2,1)

//Escreva uma função chamada calcularFatorial que aceita um número como parâmetro e retorna o fatorial desse número.
let fatorial = 1
function calcularFatorial(a) {
    for (let index = 1; index <= a; index++) {
        fatorial = fatorial * index
        
    }
    console.log(fatorial);
    
}
calcularFatorial(5)

//Escreva uma função chamada contarVogais que aceita uma string como parâmetro e retorna o número de vogais na string.
let contagem = 0
function contarVogais(string) {
    for (let index = 0; index < string.length; index++) {
        if (string[index] === "a" || string[index] === "e" || string[index] === "o" || string[index] === "u") {
            contagem ++
        }
        
    }
    console.log(contagem);
    
}

contarVogais("Manox é o cara") 

//Escreva uma função chamada calcularMedia que aceita um array de números como parâmetro e retorna a média desses números.

let arrayNumeros = [1,2,3,4,5,6]
let soma = 0
function calcularMedia(array) {
    for (let index = 0; index < array.length; index++) {
        soma += array[index]
        
    }
    console.log(soma / array.length);
    
}

calcularMedia(arrayNumeros)


//Escreva uma função chamada encontrarElemento que aceita um array e um valor como parâmetros, e retorna true se o valor estiver presente no array, e false caso contrário.

let arrayString = ["c","d","f","g"]

function encontrarElemento(array,a) {

    for (let index = 0; index < array.length; index++) {
        if (array[index] === a){
            console.log(true);
        } 
    }
    
}
encontrarElemento(arrayString, "a")

//Escreva uma função chamada calcularPotencia que aceita dois números como parâmetros e retorna o primeiro número elevado à potência do segundo número.


