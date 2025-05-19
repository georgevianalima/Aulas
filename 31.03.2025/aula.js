// let array = [1,2,3,4,5]

// for (let index = 0; index < array.length; index++) {
//     console.log(index);
    
    
// }
// let soma = 0

// //soma de números
// for (let index = 0; index <= 100; index++) {
//     soma = soma + index


// }
// console.log(soma);

// LISTA

// Contagem Progressiva:

for (let index = 1; index <= 10; index++) {
    console.log(index);
    
    
}

// Crie um loop que conta de 1 a 10 e imprima cada número no console.

for (let index = 1; index <= 10; index++) {
    console.log(index);
    
    
}

// Contagem Regressiva
for (let index = 10; index >= 0; index--) {
    console.log(index);
    
    
}

// Contagem de Números Pares
let pares = 0
for (let index = 0; index < 10; index++) {
    if (index %2 === 0) {
        pares = pares + 1
    }
    
    
}
console.log(pares);


// Utilize um loop para imprimir todos os números pares de 0 a 20 no console.

for (let index = 0; index <= 20; index++) {
    if (index %2 === 0) {
        console.log(index);
        
    }
    
}

// Contagem de Números Ímpares
let impares = 0
for (let index = 0; index < 10; index++) {
    if (index %2 === 1) {
        impares = impares + 1
        
        
    }
    
}
console.log(impares);


// Utilize um loop para imprimir todos os números ímpares de 1 a 20 no console.

for (let index = 0; index <= 20; index++) {
    if (index %2 === 1) {
        console.log(index);
        
    }
    
}

// Tabuada de um Número Específico

let tabuada = 10

for (let index = 1; index <= 10; index++) {
    console.log(`${tabuada} x ${index} = ${tabuada * index}`);
    
    
}
// Crie um loop que imprime a tabuada do 5 (de 1 a 10) no console.

let tabuada1 = 5

for (let index = 1; index <= 10; index++) {
    console.log(`${tabuada1} x ${index} = ${tabuada1 * index}`);
    
    
}

// Soma de Números

// Utilize um loop para somar todos os números de 1 a 100 e imprima o resultado no console.

let somaNumeros = 0

for (let index = 1; index <= 100; index++) {
    somaNumeros = somaNumeros + index
    
}
console.log(somaNumeros);


// Média de Números

// Crie um loop que calcula a média de todos os números de 1 a 50 e imprima o resultado no console.

let somaMedia = 0

for (let index = 1; index <= 50; index++) {
    somaMedia += index
    
}
console.log(somaMedia /50);


// Fatorial de um Número

let multi1 = 1
for (let index = 1; index <= 4; index++) {
    multi = multi1 * index;
    
}
console.log(multi);


// Utilize um loop para calcular o fatorial de um número especificado e imprima o resultado no console.
let fatorial = 5
let multi = 1
for (let index = 1; index <= fatorial; index++) {
    multi = multi * index;
    console.log(multi);
    
    
}
console.log(multi);

// Soma de Números Pares

let somaPares = 0

for (let index = 0; index <= 20; index+=2) {
    somaPares += index
    
}
console.log(somaPares);


// Crie um loop que calcula a soma de todos os números pares de 1 a 50 e imprima o resultado no console.

let somaPares50 = 0
for (let index = 0; index <= 50; index+=2) {
    somaPares50 += index
    
}
console.log(somaPares50);


// Cálculo de Potência

let numeroPotencia = 2

for (let index = 0; index < 10; index++) {
    console.log(numeroPotencia ** index);   
    
}


// Imprimir uma lista de nomes
// Dado um array de nomes, use for para imprimir cada nome.

let arrayNomes = [
    {
        id:1,
        nome:"Luz"
    },
    {
        id:2,
        nome:"Camera"
    },
    {
        id:3,
        nome:"Ação"
    }
]
    for (let index = 0; index < arrayNomes.length; index++) {
        console.log(arrayNomes[index].nome);
        
    
}



// Imprimir um array de números
// Dado um array de números, use um laço for para imprimir todos os números.

let arrayNumeros = [1,2,3,4,5,6]

for (let index = 0; index < arrayNumeros.length; index++) {
    console.log(arrayNumeros[index]);   
    
}

// Somar elementos de um array
// Dado um array com os números [1, 2, 3], use um for para somar todos os números e imprimir o resultado.

let arraySoma = [1,2,3]
let recebe = 0
for (let index = 0; index < arraySoma.length; index++) {
    recebe += arraySoma[index]    
}
console.log(recebe);


// Imprimir os números de 10 a 1
// Use um for para imprimir os números de 10 a 1 em ordem decrescente.

for (let index = 10; index >= 1; index--) {
    console.log(index);
    
    
}

//Quando for multiplo de 3 mostre o mar, quando for de 4 mostre o menino e dos 2 marmenino


// 2. Filtrar objetos pelo cargo "Student"
// Use um for para encontrar todos os objetos em que o role seja "Student" e imprima o nome dessas pessoas.

// Exemplo de saída:
// Joao
// Lucas1. Imprimir o nome de todos os objetos

// Use um laço for para imprimir o nome de cada pessoa no array arrayObj.
// Exemplo de saída:
// Elias
// Joao
// Lucas
// Jander
// Ander-som
// Jander
// Ander-som

let arrayNomes = [
    {
        nome: "Elias"
    },
    {
        nome: "Joao"
    },
    {
        nome: "Lucas"
    },
    {
        nome: "Jander"
    },
    {
        nome: "Ander_som"
    }    
]

for (let index = 0; index < arrayNomes.length; index++) {
        console.log(arrayNomes[index].nome);
        
}

// 3. Contar quantos objetos têm o cargo "Student"
// Crie um laço for que percorra o array e conte quantos objetos têm o cargo "Student". em js

let estudantes = [
    { id: 1, nome: "Mariana", idade: 17, role: "teacher" },
    { id: 2, nome: "Carlos", idade: 14, role: "student" },
    { id: 3, nome: "Ana", idade: 22, role: "student" },
    { id: 4, nome: "João", idade: 15, role: "teacher" },
    { id: 5, nome: "Fernanda", idade: 19, role: "student" },
    { id: 6, nome: "Lucas", idade: 16, role: "teacher" },
    { id: 7, nome: "Raquel", idade: 20, role: "student" },
    { id: 8, nome: "Gustavo", idade: 13, role: "teacher" },
    { id: 9, nome: "Isabela", idade: 18, role: "student" },
    { id: 10, nome: "Ricardo", idade: 17, role: "student" },
    { id: 11, nome: "Prof. Silva", idade: 40, role: "teacher" },
    { id: 12, nome: "Prof. Oliveira", idade: 35, role: "teacher" }
];

let qtdStudent = 0
for (let index = 0; index < estudantes.length; index++) {
    if (estudantes[index].role === "student") {
        qtdStudent += 1
        console.log();
        
    }
    
}
console.log(qtdStudent);

// Exemplo de saída:
// 4

// // 4. Imprimir apenas o id e role dos objetos
// // Use um laço for para imprimir apenas o id e o role de cada objeto.

let estudantes = [
    { id: 1, nome: "Mariana", idade: 17, role: "teacher" },
    { id: 2, nome: "Carlos", idade: 14, role: "student" },
    { id: 3, nome: "Ana", idade: 22, role: "student" },
    { id: 4, nome: "João", idade: 15, role: "teacher" },
    { id: 5, nome: "Fernanda", idade: 19, role: "student" },
    { id: 6, nome: "Lucas", idade: 16, role: "teacher" },
    { id: 7, nome: "Raquel", idade: 20, role: "student" },
    { id: 8, nome: "Gustavo", idade: 13, role: "teacher" },
    { id: 9, nome: "Isabela", idade: 18, role: "student" },
    { id: 10, nome: "Ricardo", idade: 17, role: "student" },
    { id: 11, nome: "Prof. Silva", idade: 40, role: "teacher" },
    { id: 12, nome: "Prof. Oliveira", idade: 35, role: "teacher" }
];


// 5. Alterar o cargo de uma pessoa para "Teacher"
// Use um for para mudar o role de uma pessoa específica para "Teacher". Por exemplo, mude o cargo de "Joao" para "Teacher".

// Exemplo de saída após alteração:
// Joao agora tem o cargo de "Teacher".

// 6. Criar um novo array apenas com os nomes
// Use um for para criar um novo array contendo apenas os nomes das pessoas no array original.

// Exemplo de saída:
// ["Elias", "Joao", "Lucas", "Jander", "Ander-som"]


// let arrayNomes = []

// for (let index = 0; index < estudantes.length; index++) {
//   arrayNomes.push(estudantes[index].nome)
// }
// console.log(arrayNomes)

// 7. Verificar se existe uma pessoa com o nome "Lucas"
// Use um laço for para verificar se existe algum objeto com o nome "Lucas". Se existir, imprima "Encontrado".

// Exemplo de saída:
// Encontrado

// 8. Verificar a quantidade de pessoas com o nome "Student" e "Teacher"
// Crie um laço que conte quantas pessoas são "Student" e quantas são "Teacher" e imprima essa informação.

// Exemplo de saída:
// Estudantes: 4
// Professores: 1

// 9. Alterar o nome de "Ander-som" para "Anderson"
// Crie um laço for para modificar o nome da pessoa que tem o nome "Ander-som" para "Anderson".

// Exemplo de saída após alteração:
// O nome de "Ander-som" agora é "Anderson".

// 10. Imprimir o nome de quem tem o id 3
// Crie um laço for para procurar e imprimir o nome da pessoa com o id 3.

// let estudantes = [
//   { nome: "Mariana", idade: 17 },
//   { nome: "Carlos", idade: 14 },
//   { nome: "Ana", idade: 22 },
//   { nome: "João", idade: 15 },
//   { nome: "Fernanda", idade: 19 },
//   { nome: "Lucas", idade: 16 },
//   { nome: "Raquel", idade: 20 },
//   { nome: "Gustavo", idade: 13 },
//   { nome: "Isabela", idade: 18 },
//   { nome: "Ricardo", idade: 17 }
// ];

// Neste exercício, vamos verificar se os estudantes têm idade para votar (idade maior ou igual a 16 anos) e mostrar se eles estão ou não habilitados para votar.

// Neste exercício, vamos contar quantos estudantes estão em diferentes faixas etárias:

// Faixa 1: 13 a 17 anos
// Faixa 2: 18 a 25 anos
// Faixa 3: 26 a 35 anos
// Faixa 4: acima de 35 anos

// let alunos = [
//   { nome: "Mariana", notas: [7, 8, 6] },
//   { nome: "Carlos", notas: [4, 5, 3] },
//   { nome: "Ana", notas: [9, 8, 10] },
//   { nome: "João", notas: [5, 5, 5] },
//   { nome: "Fernanda", notas: [6, 7, 5] }
// ];

// Neste exercício, temos alunos com suas notas em várias matérias. A tarefa é calcular a média das notas de cada aluno e classificá-los como "Aprovado" (média >= 6) ou "Reprovado" (média < 6).


// Neste exercício, vamos contar quantos estudantes têm nota superior a 7 e exibir os nomes desses estudantes.




//  Encontrar a pessoa com a maior idade e imprimir o nome dela.

// let estudantes = [
//   { nome: "Mariana", idade: 17 },
//   { nome: "Carlos", idade: 14 },
//   { nome: "Ana", idade: 22 },
//   { nome: "João", idade: 15 },
//   { nome: "Fernanda", idade: 19 },
//   { nome: "Lucas", idade: 16 },
//   { nome: "Raquel", idade: 20 },
//   { nome: "Gustavo", idade: 13 },
//   { nome: "Isabela", idade: 18 },
//   { nome: "Ricardo", idade: 17 }
// ];

//  Encontrar a média das idades e imprimir quantos estudantes estão acima da média.
// let estudantes = [
//   { nome: "Mariana", idade: 17 },
//   { nome: "Carlos", idade: 14 },
//   { nome: "Ana", idade: 22 },
//   { nome: "João", idade: 15 },
//   { nome: "Fernanda", idade: 19 },
//   { nome: "Lucas", idade: 16 },
//   { nome: "Raquel", idade: 20 },
//   { nome: "Gustavo", idade: 13 },
//   { nome: "Isabela", idade: 18 },
//   { nome: "Ricardo", idade: 17 }
// ];

// //Verificar se existe algum estudante que tem o nome começando com a letra "A".

// let estudantes = [
//   { nome: "Mariana", idade: 17 },
//   { nome: "Carlos", idade: 14 },
//   { nome: "Ana", idade: 22 },
//   { nome: "João", idade: 15 },
//   { nome: "Fernanda", idade: 19 },
//   { nome: "Lucas", idade: 16 },
//   { nome: "Raquel", idade: 20 },
//   { nome: "Gustavo", idade: 13 },
//   { nome: "Isabela", idade: 18 },
//   { nome: "Ricardo", idade: 17 }
// ];


// //Agrupar estudantes por faixa etária.

// let estudantes = [
//   { nome: "Mariana", idade: 17 },
//   { nome: "Carlos", idade: 14 },
//   { nome: "Ana", idade: 22 },
//   { nome: "João", idade: 15 },
//   { nome: "Fernanda", idade: 19 },
//   { nome: "Lucas", idade: 16 },
//   { nome: "Raquel", idade: 20 },
//   { nome: "Gustavo", idade: 13 },
//   { nome: "Isabela", idade: 18 },
//   { nome: "Ricardo", idade: 17 }
// ];

// for (let index = 0; index < estudantes.length; index++) {
//       if (estudantes[index].idade = 13) {

//       }
          
// }
// console.log(estudantes[0].idade);
