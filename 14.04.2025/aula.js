//Arrays methods

// let array = ["Ei","Ei","Olha","O","Som"]
// let array2 = ["Vish","Vish","Que","Ta","Bom"]
// //let string = array.toString()
// //let string = array.join(" ")
// let newArray = array.concat(array2)
// console.log(newArray.join(" "))


let musica1 = ["Chega","Pra","Ca","Meu","Bem","Que","Eu","Vou",]
let musica2 = ["lhe","Ensinar","a","nova","Dança","do","estado","do","Pará"]

let newArrayMusica = musica1.concat(musica2)

console.log(newArrayMusica.join(" "));

let numbers = [1,23,4,54,5423]

numbers.push(242)

console.log(numbers);


//push
// const usuarios = [
//     { nome: 'Alice', idade: 25 },
//     { nome: 'Bruno', idade: 30 },
//     { nome: 'Carla', idade: 22 },
//     { nome: 'Diego', idade: 28 },
//     { nome: 'Eva', idade: 35 },
//   ];

//   let newsArray = []

//   for (let index = 0; index < usuarios.length; index++) {
//     if (usuarios[index].idade >= 28) {
//         newsArray.push(usuarios[index])     
//     }
    
//   }
// console.log(newsArray);

//map

const usuarios = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bruno', idade: 30 },
    { nome: 'Carla', idade: 22 },
    { nome: 'Diego', idade: 28 },
    { nome: 'Eva', idade: 35 },
  ];

//usuarios.map(usuario => console.log(usuario.nome))
usuarios.map(usuario => console.log(`${usuario.nome} tinha ${usuario.idade} anos, agora tem ${usuario.idade +5} anos`))


//Dobrar os números
// const numeros = [1,2,3,4,5]

// let newArray = numeros.map(numero => numero*2)

// console.log(newArray);


//Criar mensagens personalizadas

// const nomes = ["Lucas", "Bianca","Carlos"]

// let newArray = nomes.map(nome => `Bem vindo, ${nome}`);

// console.log(newArray);

//Transformar para String

const numeros = [10,20,30]

let newArray = numeros.map( numero => numero.toString())

console.log(newArray);



//find

const array = [10, 11, 3, 20, 5];

const greaterThanTen = array.find(element => element > 10);

console.log(greaterThanTen)//11