function returnHelloWorld() {
    console.log("Manox");
    
}
returnHelloWorld()

function returnSum(a, b) {
    let sum = a + b
    console.log(sum);   
}
returnSum(2,3)

//Arrow function
const returnSub = (a,b) => {
    let sub = a - b
    console.log(sub);
    
}

returnSub(10,20)
returnSub(100,200)

function returnSum(a, b) {
    let sum = a + b
    return sum  
}
console.log(returnSum(2,5));

function Welcome(nome) {
    console.log(`Seja bem vindo ${nome}`);
        
}

Welcome("Manox")

// Desenvolda uma função que receba um número como parâmetro e verique se ele é par ou ímpar. Retorne true se par

function checkIfISEvenOrOdd(numero) {
    if (numero %2 === 0) {
        console.log("Número é par");
        console.log(true);
        
        
    }else{
        console.log("Número é ímpar");
        console.log(false);
        
        
    }
    
}

checkIfISEvenOrOdd(3)

let array = [25,56,98,75]
let array2 = [25,6,9]

function returnMediumValue(array) {
    let soma = 0
    for (let index = 0; index < array.length; index++) {
        soma = array[index] + soma
              
    }
    let media = soma/array.length
    console.log(`Média: ${media.toFixed(2)}`);
}
returnMediumValue(array)
returnMediumValue(array2)


// Crie uma função que receba uma string como parametro e retorne a mesma string com todoas as letras em caixa alta. Utilize essa função para converter diferentes strings.

function convertToUpperCase(palavra) {
    let palavraUpperCase = palavra.toUpperCase()
    
    console.log(palavraUpperCase);
    
}
convertToUpperCase("Manox")


// let array = [2,34,522,5423.34232]

// function mediaArray(batatinha) {
//     let soma = 0
//     for (let index = 0; index < batatinha.length; index++) {
//         soma = soma + batatinha[index]
        
//     }
//     let media = soma/batatinha.length
//     console.log(media.toFixed(2));
    
// }

// mediaArray(array)


let nomes = ["Alice","Bob","Carlos","Diana","Eduardo","Fernanda"]

function returnIfNameIsPresent(nomes, nome) {
    for (let index = 0; index < nomes.length; index++) {
        if (nome.toLowerCase() === nomes[index].toLowerCase()) {
            console.log(true);
            return
        }
        
        
    }
    console.log(false);
}
returnIfNameIsPresent(nomes, "alice")

const pessoas = [
    { nome: 'Ana', idade:18},
    { nome: 'Carlos', idade:16},
    { nome: 'Beatriz', idade:15},
    { nome: 'Diego', idade:40},
    { nome: 'Eduarda', idade:31}
]
function retornarNomesMaioresDeIdade(pessoas) {
    for (let index = 0; index < pessoas.length; index++) {
        if (pessoas[index].idade >=18) 
            console.log(pessoas[index].nome);
            {
            
        }
        
    }
}

retornarNomesMaioresDeIdade(pessoas)