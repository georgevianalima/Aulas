// //console.log("Hello World")

// // let palavra = "Hello World"
// // console.log(palavra)

// // palavra = "Testando mudança de valor"
// // console.log(palavra)

// // const naoMuda = "teste"
// // naoMuda = 1
// // console.log(naoMuda)

// //Tipos de dados

// // let palavra = "String" //string
// // let numero = 10 // Number
// // let bool = true // Boolean
// // let nulo = null // Nulo
// // let batata //undefined //Não definido

// //concatenação
// // let nome = "Elias"
// // let idade = 19
// // //console.log("Bem vindo," + nome + " voce tem " + idade + " anos de idade")
// // console.log(`Bem vindo, ${nome}. Você tem ${idade} anos de idade. `)

// ///////////////////////////////////////////////////////////////////////////

// //Exercicio 1: Saudacao
// //Use template strings para exibir uma saudacao com o nome de uma pessoa.
// //Nome da pessoa é a variável

// let nome = "George"
// console.log(`Olá, ${nome}, seja bem vindo!`)

// // Exercício 2: Frase Completa
// // Combine palavras armazenadas em variáveis para formar uma frase "Eu adoro javascript"
// // 3 variáveis , Eu,adoro,javascript

// let var1 = "Eu"
// let var2 = "adoro"
// let var3 = "javascript"
// console.log(`${var1} ${var2} ${var3}`)

// // Exercício 3: Informações de Aluno
// // Exiba informações de um aluno em um texto formatado Nome Matricula Escola.

// let nomeAluno = "George"
// let matriculaAluno = 457511569
// let escolaAluno = "Digital College Sul"
// console.log(`O ${nomeAluno} frequenta a ${escolaAluno} com a matrícula ${matriculaAluno}`)

// // Exercício 4: Convite
// // Crie um convite personalizado usando template strings Convidado Evento Local.

// let nomeConvidado = "George Lima"
// let nomeEvento = "Tipos de dados em Javascript"
// let nomeLocal = "Digital College Sul"
// console.log(`Convidados ${nomeConvidado} para a palestra ${nomeEvento} que acontecerá na ${nomeLocal}.`)

// // Exercício 5: Descrição de Objeto
// // Crie uma descrição detalhada de um objeto Objeto Marca Cor.

// let nomeObjeto = "Bicicleta"
// let nomeMarca = "TSW"
// let nomeCor = "amarelo"
// console.log(`A ${nomeObjeto} tem a cor ${nomeCor} e é da marca ${nomeMarca}.`)

// // Exercício 6: Biografia Curta
// // Escreva uma breve biografia usando variáveis Nome Idade Profissao.

// let nomePessoa = "George Viana"
// let idadePessoa = 40
// let profissaoPessoa = "Dev FullStack"
// console.log(`${nomePessoa} é um estudante de ${idadePessoa} anos da Digital College e possui extrema experiência como ${profissaoPessoa}.`)

// // Exercício 7: Apresentação de Filme
// // Apresente detalhes sobre um filme NomeFilme Detalhes Diretor.

// let nomeFilme = "Dev"
// let detalhesFilme = "é um filme sobre desenvolvimento de programas hackers"
// let nomeDiretor = "George Lima"
// console.log(`O ${nomeFilme} ${detalhesFilme} do renomado diretor ${nomeDiretor}`)

// console.log("--------------------------------------------------------------")
// //Arrays

// let lista = [123,23,423,5466]
// let lista2 = ["oi", "som"]
// let lista3 = [true, false, true, false]
// let lista4 = ["oi", null, undefined, 23, "teste"]

// console.log(lista[0], lista2[1], lista3[2], lista4[4])

// console.log("Exercicios-----------------------------")
// // Por favor, mostre em um console.log o elemento da lista 3 falso(Tanto faz o primeiro quanto o segundo)

// console.log(lista3[1])

// // Por favor, mostre em um console.log o elemento da lista 1 423

// console.log(lista[2])

// // Por favor, mostre em um console.log o elemento da lista 4 23

// console.log(lista4[3])

// // Por favor, mostre em um console.log o elemento da lista 4 null

// console.log(lista4[1])

// // Por favor, mostre em um console.log o elemento da lista 2 som

// console.log(lista2[1])

// console.log("Exercicio 2---------------------------------")

let exemplo = [1,["Teste", "Desse", "Array"], [true, 2,"Undefined"],5,["Pera", "Uva", "Maça"],[2,4,6,3]]

// Quero que retornem Teste
console.log(exemplo[1][0])
// Quero que retornem 5
console.log(exemplo[3]);
// Quero que retornem Undefined 
console.log(exemplo[2][2])
// Quero que retornem Maça
console.log(exemplo[4][2])
// Quero que retornem 6
console.log(exemplo[5][2])


console.log("Exercicio 3----------------------------------------------------")

let exemplo2 = [1,3,["Teste","Desse",[true,2,"Undefined"]],[5,["Bulldog","Shitzu",[12,42,60,["Chevette","porsche"]]]],["Pera","Uva",[2,4,6,3]]]

// Porsche
console.log(exemplo2[3][1][2][3][1])
// 6
console.log(exemplo2[4][2][2])
// Undefined
console.log(exemplo2[2][2][2])
// Shitzu
console.log(exemplo2[3][1][1])