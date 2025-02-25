// let usuario = {
//     id:1,
//     nome:"Manox",
//     email:"manox@manox.dev",
//     idade:19,
    
// }
// console.log(`O usuário ${usuario.nome} de email ${usuario.email} está estudando muito.`)

// let filme  = {
//     id:1,
//     titulo:"O Senhor dos anéis:  A Sociedade do Anel",
//     ano:2001,
//     genero:"Fantasia",
// }
// //Eu gostaria que vossas senhorias retornassem a seguinte frase:
// //O filme ... do ano ... é o meu filme favorito
// console.log(`O filme ${filme.titulo} do ano ${filme.ano} é o meu filme favorito`)

// //Crie um objeto estudante com as propriedades nome, idade e curso. Use uma template string para retornar uma frase no formato:
// //"Meu nome é [nome], tenho [idade] anos e estou cursando [curso]."

// let estudante = {
//     nome: "Marcão o cara da corrida",
//     idade:30,
//     curso:"Corrida ao ar livre"  
// }
// console.log(`Meu nome é ${estudante.nome}, tenho ${estudante.idade} anos e estou cursando ${estudante.curso}`)

// // Crie um objeto compra com as propriedades item, preco, e desconto (percentual de desconto). Use uma template string para calcular o preço com desconto e exibir a mensagem no formato:
// // "O preço original do item [item] é R$[preco]. Com o desconto de [desconto]%, o preço final será R$[preco - (preco * desconto / 100)]."

// let objeto = {
//     nome: "Azeite",
//     preco:42,
//     desconto:0.2
// }
// let valorFinal = objeto.preco * (1-objeto.desconto)

// console.log(`O preço original do item ${objeto.nome} é R$${objeto.preco}. Com desconto de ${objeto.desconto*100}%, o preço final será de R$${valorFinal}.`)

// // Crie um objeto endereco com as propriedades rua, cidade e estado. Utilize uma template string para retornar um endereço formatado, como:
// // "Eu moro na rua [rua], na cidade de [cidade], estado de [estado]."

// let endereco = {
//     rua:"Sem saida",
//     cidade:"Eusébio",
//     estado:"Ceará"
// }

// console.log(`Eu moro na rua ${endereco.rua}, na cidade de ${endereco.cidade}, no estado do ${endereco.estado}.`)

// // Crie um objeto produto com as propriedades nome, preco e quantidade. Use uma template string para retornar uma frase com o preço total (preço * quantidade) do produto, como:
// // "O produto [nome] custa R$[preco] e temos [quantidade] unidades em estoque. O total de estoque é R$[preco * quantidade]."

// let produto = {
//     nome:"Toddy",
//     preco:3.50,
//     quantidade:12
// }
// let quantidadeEstoque = produto.preco * produto.quantidade
// console.log(`O produto ${produto.nome} custa R$${produto.preco} e temos ${produto.quantidade} unidades em estoque. O total de estoque é ${quantidadeEstoque}.`)

let usuarios = [
    {
        id:1,
        nome:"Zezim",
        cpf:89742386324,
        telefone:324234324
    },
    {
        id:2,
        nome:"Elias",
        cpf:8974233232,
        telefone:12342123
    },
    {
        id:3,
        nome:"Junim",
        cpf:48329747786,
        telefone:43242232
    }
]

// ${usuarios[index].nome}
// Gostaria que vocês retornassem a seguinte frase do junim
// [nome] de [cpf] está com a matricula travada, favor ligar [telefone]

console.log(`${usuarios[2].nome} de CPF ${usuarios[2].cpf}, está com a matricula travada, favor ligar ${usuarios[2].telefone}`)

//Gostaria que vocês retornassem a seguinte frase
// A oficina do [nome] está aberta hoje, ligue para [telefone] para mais informações
console.log(`${usuarios[1].nome} está aberta hoje, ligue para ${usuarios[1].telefone}`);


//Gostaria que vocês retornassem a seguinte frase 
// O [nome] de [cpf] foi sorteado no totolec, por favor venha retirar seu prêmio.
console.log(`O ${usuarios[0].nome} de CPF ${usuarios[0].cpf} foi sorteado no totolec, por favor venha retirar seu prêmio.`);
console.log(`${usuarios[1].nome,usuarios[0].nome}`);

//operadores

// let soma = 10 + 20
// let sub = 20 - 10
// let mult = 2 * 20
// let divisao = 10/2
// let exp = 2**3
// let raiz = 25**(1/2)
// console.log("Soma: ", soma)
// console.log("Subtracao: ", sub)
// console.log("Multiplicacao: ", mult)
// console.log("Divisao: ", divisao)
// console.log("Exponencial: ", exp)
// console.log("Raiz: ", raiz)



// let numero1 = prompt("Digite o primeiro número: ")
// let numero2 = prompt("Digite o segundo número: ")

// let soma = Number(numero1) + Number(numero2)

// alert(soma)

let nome = prompt("Digite seu nome: ")

alert(`${nome} é o cara!!`)