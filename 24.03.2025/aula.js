// let frase = "Manox é o cara"

// for (let index = 0; index < frase.length; index++) {
//     console.log(frase[index]);
// }

// let usuarios = [
//     {
//         id:1,
//         nome:"Romário",
//         cpf:"837.357.850-18",
//         email:"romario@gmail.com",
//         senha:"123bolinha4"
//     },
//     {
//         id:2,
//         nome:"Filent",
//         cpf:"899.748.790-60",
//         email:"filent@gmail.com",
//         senha:"123bolinha4"
//     },
//     {
//         id:3,
//         nome:"Kesia",
//         cpf:"150.499.250-45",
//         email:"kesia@gmail.com",
//         senha:"123bolinha4"
//     },
//     {
//         id:4,
//         nome:"Marcos",
//         cpf:"685.272.580-48",
//         email:"marcos@gmail.com",
//         senha:"123bolinha4"
//     }
// ]
// ]
// let email = prompt("Digite seu email")
// let senha = prompt("Digite sua senha")

// for (let index = 0; index < usuarios.length; index++) {
//     if(usuarios[index].email === email && usuarios[index].senha === senha){
//         window.location.href="dashboard.html"
//         break
//     }else{
//     window.location.href="erro.html"
//     }
// }

for (let index = 0; index < 10; index++) {
    console.log(index);   
    
}

for (let index = 10; index >= 1; index--) {
    console.log(index);   
    
}

for (let index = 0; index <= 20; index+=2) {
    console.log(index);   
    
}

for (let index = 1; index <= 20; index+=2) {
    console.log(index);   
    
}

//tabuada

let numero = 2
for (let index = 0; index <= 10; index++) {
    console.log(`${numero} * ${index} = ${index*numero}`);
}

// Utilize um loop para somar todos os números de 1 a 100 e imprima o resultado no console.
let soma = 0
for (let index = 0; index <= 100; index++) {
    soma = soma + index
    
}
console.log(soma);

// Média de Números

// Crie um loop que calcula a média de todos os números de 1 a 50 e imprima o resultado no console.

// Fatorial de um Número
// let numero = 5
// let fatorial = 1
// for (let index = 1; index <= numero; index++) {
//     fatorial = fatorial *index
//     console.log(fatorial)
// }

// Utilize um loop para calcular o fatorial de um número especificado e imprima o resultado no console.

// Soma de Números Pares

// Crie um loop que calcula a soma de todos os números pares de 1 a 50 e imprima o resultado no console.
// let soma = 0
// for (let index = 1; index <= 50; index++) {
//     if( index % 2 ===0) {
//         soma= soma +index
//     }
    
// }
// console.log(soma)



// Cálculo de Potência

let resultado = 1
let expoente = 5
let base = 3

for (let index = 1; index < expoente; index++) {
    resultado *= base
}
console.log(resultado);


// Imprimir uma lista de nomes
// Dado um array de nomes, use for para imprimir cada nome.

let arrayDados = [
    {
        nome: "Teste",
        email: "teste@gmail.com"
    },
    {
        nome: "Bota",
        email: "bota@gmail.com"
    },
    {
        nome: "Anet",
        email: "anet@gmail.com"
    }
]

// Imprimir um array de números
// Dado um array de números, use um laço for para imprimir todos os números.

// Somar elementos de um array
// Dado um array com os números [1, 2, 3], use um for para somar todos os números e imprimir o resultado.

// Imprimir os números de 10 a 1
// Use um for para imprimir os números de 10 a 1 em ordem decrescente.


let par = 0
let impar = 0

for (let index = 0; index <= 20; index++) {
    if (index %2 === 0) {
        par++
        
    }else{
        impar++
    }   
    
}
console.log(`Pares ${par}, Impares ${impar}`);