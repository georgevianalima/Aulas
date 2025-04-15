// let nome = "Mano"
// let manoxLembrou = false

// if (nome === "Manox" ) {
//     console.log("Você está certo!")
// } else if (nome != "Manox"){
//     console.log("Digite novamente o nome!")
// }else {
//     console.log(`"O nome é ${nome}`);
    
// }

//-------------------------------

// let numero = 5648464867

// if (par % 2 ===0) {
//     console.log("Número par"); 
    
// } else {
//     console.log("Número impar");
        
// }

// if (numero % 2 === 0) {
//     console.log("Multiplo de 3"); 
    
// } else {
//     console.log("Não é multiplo");
        
// }

// Verificar se o número é par ou ímpar

let parOuImpar = 10

if (parOuImpar % 2 === 0 ) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar"); 
}

// Escreva um código que verifique se uma pessoa é maior de idade (18 anos ou mais) e se possui carteira de motorista.

let idade = 18
let habilitado = true
if (idade >= 18 && habilitado === true) {
    console.log("O meliante é de maior e possui carteira");
} else {
    console.log(`O meliante é de menor e não possui carteira`);
}

// Escreva um código que verifique se um número está entre 1 e 10.

let entre = 10

if (entre > 0  && entre < 11) {
    console.log("O número está entre 1 e 10");
    
} else {
    console.log("O número NÃO está entre 1 e 10");    
}

// Escreva um código que determine se uma pessoa é idosa, considerando que uma pessoa é idosa quando tem 60 anos ou mais.

let pessoaIdosa = 58

if (pessoaIdosa >= 60) {
    console.log("Pessoa idosa");
} else {
    console.log("Pessoa não é idosa");    
}

// Escreva um código para classificar o desempenho de um aluno com base na sua nota. Se a nota for maior ou igual a 7, o aluno foi aprovado; se for menor que 7 e maior ou igual a 5, o aluno está de recuperação; e se for menor que 5, o aluno foi reprovado.

let notaAluno = 7

if (notaAluno >= 7 ) {
    console.log("O aluno foi aprovado");
} else if (notaAluno >= 5 < 7){
    console.log("Aluno está de recuperação");
} else{
    console.log("Aluno não aprovado");
}

// Escreva um código que verifique se um número é múltiplo de 3 ou 5.

let multiplo = 15

if (multiplo %3 === 0 || multiplo %5 === 0) {
    console.log("O número é multiplo de 3 ou 5");    
}else{
    console.log("O número não é multiplo de 3 ou 5");
}

// Escreva um código que compare dois números e informe qual deles é maior ou se eles são iguais.

let numero1 = 21
let numero2 = 22

if (numero1 > numero2) {
    console.log(`O número ${numero1} é maior que o ${numero2}`);
} else if(numero1 === numero2){
    console.log(`O ${numero1} é igual a ${numero2}`);
}else{
    console.log(`O ${numero1} é menor que ${numero2}`);
}

// Escreva um código que verifique se a palavra fornecida é exatamente "javascript" (considerando letras minúsculas).

let palavra = "javascript"

if (palavra === "javascript") {
    console.log(`A palavra ${palavra} é exatamente igual`);
} else {
    console.log(`A palavra ${palavra} não é exatamente igual`);    
}

// Escreva um código que verifique se um número é divisível por 7.

let divisivel = 14

if (divisivel %7 === 0) {
    console.log("É divisível por 7");
} else {
    console.log("Não é divisível por 7");    
}

// Escreva um código que verifique se uma pessoa tem o nome "Maria".

let nomeCompleto = "Maria"

if (nomeCompleto === "Maria") {
    console.log("O nome tem Maria");
} else {
    console.log("O nome não tem Maria");    
}

// Escreva um código que verifique se um número está entre 10 e 20 (inclusive).

let entreNumero = 20

if (entreNumero >= 10 && entreNumero <= 20) {
    console.log("O número está entre 10 e 20");
    
} else {
    console.log("O número NÃO está entre 10 e 20");    
}

// Escreva um código que verifique se um número é maior que 100.

let numeroMaior = 101

if (numeroMaior > 100) {
    console.log("O número é maior que 100");    
} else {
    console.log("O número NÃO é maior que 100");
}

// Escreva um código que verifique se a senha fornecida é "1234".

let senha = 1234

if (senha === 1234) {
    console.log("A senha fornecida está correta");
    
} else {
    console.log("A senha fornecida não está correta");
}

// Escreva um código que determine se o mês tem 30 ou 31 dias. Considere fevereiro com 28 dias.

let mes = 28

if ( mes === 30) {
    console.log("O mês tem 30 dias");    
} else if(mes === 31){
    console.log("O mês tem 31 dias"); 
}else if(mes === 28){
    console.log("O mês é Fevereiro");
}else{
    console.log("Digite um valor válido");
    
}

// Escreva um código que verifique se um número é múltiplo de 2 e 3 ao mesmo tempo

let multiploTempo = 16

if (multiploTempo %2 === 0 && multiploTempo % 3 === 0) {
    console.log("O número é multiplo de 2 e 3 ao mesmo tempo");
} else {
    console.log("O número NÃO é multiplo de 2 e 3 ao mesmo tempo");
}

//-----------------------------------------------

// 24. O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
//                           Até 5 Kg               Acima de 5 Kg
//     File Duplo      R$ 4,90 por Kg           R$ 5,80 por Kg
//     Alcatra           R$ 5,90 por Kg         R$ 6,80 por Kg
//     Picanha          R$ 6,90 por Kg          R$ 7,80 por Kg
//     Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um script que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

let tipoDeCarne = "File duplo"
let quantidadeDeCarne = 3
let formaDePagamento = "Barra de ouro que vale mais que dinheiro"

if(tipoDeCarne === "File duplo" && quantidadeDeCarne>5) {
    if(formaDePagamento === "Cartao") {
        let valorTotal = (quantidadeDeCarne*5.8*0.95).toFixed(2)
        console.log(`A compra foi ${quantidadeDeCarne}Kg de ${tipoDeCarne}\n
                     O valor total da compra ${valorTotal} no cartão com desconto de 5% `)
    } else {
        let valorTotal = (quantidadeDeCarne*5.8).toFixed(2)
        console.log(`A compra foi ${quantidadeDeCarne}Kg de ${tipoDeCarne}\n
                     O valor total da compra ${valorTotal} em dinheiro. `)
    }
} else if (tipoDeCarne === "File duplo" && quantidadeDeCarne<=5) {
    if(formaDePagamento === "Cartao") {
        let valorTotal = (quantidadeDeCarne*4.90*0.95).toFixed(2)
        console.log(`A compra foi ${quantidadeDeCarne}Kg de ${tipoDeCarne}\n
                     O valor total da compra ${valorTotal} no cartão com desconto de 5% `)
    } else {
        let valorTotal = (quantidadeDeCarne*4.9).toFixed(2)
        console.log(`A compra foi ${quantidadeDeCarne}Kg de ${tipoDeCarne}\n
                     O valor total da compra ${valorTotal} em dinheiro. `)
    }
} else if (tipoDeCarne === "Alcatra" && quantidadeDeCarne>5) {
    if(formaDePagamento === "Cartao") {
        let valorTotal = (quantidadeDeCarne*6.80*0.95).toFixed(2)
        console.log(`A compra foi ${quantidadeDeCarne}Kg de ${tipoDeCarne}\n
                     O valor total da compra ${valorTotal} no cartão com desconto de 5% `)
    } else {
        let valorTotal = (quantidadeDeCarne*6.80).toFixed(2)
        console.log(`A compra foi ${quantidadeDeCarne}Kg de ${tipoDeCarne}\n
                     O valor total da compra ${valorTotal} em dinheiro. `)
    }
} else if (tipoDeCarne === "Alcatra" && quantidadeDeCarne<=5) {
    if(formaDePagamento === "Cartao") {
        let valorTotal = (quantidadeDeCarne*5.9*0.95).toFixed(2)
        console.log(`A compra foi ${quantidadeDeCarne}Kg de ${tipoDeCarne}\n
                     O valor total da compra ${valorTotal} no cartão com desconto de 5% `)
    } else {
        let valorTotal = (quantidadeDeCarne*5.9).toFixed(2)
        console.log(`A compra foi ${quantidadeDeCarne}Kg de ${tipoDeCarne}\n
                     O valor total da compra ${valorTotal} em dinheiro. `)
    }
} else if (tipoDeCarne === "Picanha" && quantidadeDeCarne>5) {
    if(formaDePagamento === "Cartao") {
        let valorTotal = (quantidadeDeCarne*7.80*0.95).toFixed(2)
        console.log(`A compra foi ${quantidadeDeCarne}Kg de ${tipoDeCarne}\n
                     O valor total da compra ${valorTotal} no cartão com desconto de 5% `)
    } else {
        let valorTotal = (quantidadeDeCarne*6.80).toFixed(2)
        console.log(`A compra foi ${quantidadeDeCarne}Kg de ${tipoDeCarne}\n
                     O valor total da compra ${valorTotal} em dinheiro. `)
    }
} else if (tipoDeCarne === "Picanha" && quantidadeDeCarne<=5) {
    if(formaDePagamento === "Cartao") {
        let valorTotal = (quantidadeDeCarne*7.8*0.95).toFixed(2)
        console.log(`A compra foi ${quantidadeDeCarne}Kg de ${tipoDeCarne}\n
                     O valor total da compra ${valorTotal} no cartão com desconto de 5% `)
    } else {
        let valorTotal = (quantidadeDeCarne*5.9).toFixed(2)
        console.log(`A compra foi ${quantidadeDeCarne}Kg de ${tipoDeCarne}\n
                     O valor total da compra ${valorTotal} em dinheiro. `)
    }
}

//---------------------------------------------------

// Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:

//       Média de Aproveitamento  Conceito
//       Entre 9.0 e 10.0                      A
//       Entre 7.5 e 9.0                        B
//       Entre 6.0 e 7.5                        C
//       Entre 4.0 e 6.0                        D
//       Entre 4.0 e zero                      E
//     O algoritmo deve mostrar numa janela de alert as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

let nota1 = Number(prompt("Digite nota da AV1:"))
let nota2 = Number(prompt("Digite nota da AV2:"))

let media = (nota1+nota2)/2

if(media>9) {
    alert(`Nota da AV1:${nota1} \n
           Nota da AV2:${nota2} \n
           Média:${media} \n 
           O aluno foi APROVADO com conceito A`)
} else if (media>7.5 && media<=9) {
    alert(`\nNota da AV1:${nota1} \n
        Nota da AV2:${nota2} \n
        Média:${media} \n 
        O aluno foi APROVADO com conceito B`)
} else if (media>6 && media<=7.5) {
    alert(`\nNota da AV1:${nota1} \n
        Nota da AV2:${nota2} \n
        Média:${media} \n 
        O aluno foi APROVADO com conceito C`)
} else if (media>4 && media<=6) {
    alert(`\nNota da AV1:${nota1} \n
        Nota da AV2:${nota2} \n
        Média:${media} \n 
        O aluno foi REPROVADO com conceito D`)
}else if (media>0 && media<=4) {
    alert(`\n Nota da AV1:${nota1} \n
        Nota da AV2:${nota2} \n
        Média:${media} \n 
        O aluno foi REPROVADO com conceito E`)
}else {
    alert("Digite um valor válido")
}


// Você trabalha em um sistema de vendas e precisa calcular o desconto de um cliente de acordo com as seguintes regras:

// Se o cliente for VIP (idade maior que 60 ou um membro do programa de fidelidade), ele recebe um desconto de 30%.
// Se o cliente não for VIP e fizer uma compra acima de R$ 1000, ele recebe 10% de desconto.
// Se o cliente não for VIP e fizer uma compra abaixo de R$ 1000, ele recebe 5% de desconto.
// Se o cliente for menor de 18 anos, ele não pode receber nenhum desconto, independentemente do valor da compra.

let idade = Number(prompt("Digite sua idade:"))
let valor = Number(prompt("Digite o valor da compra:"))
let membroFidelidade = confirm("Membro fidelidade? ")

if(idade>60 || membroFidelidade) {
    alert(valor*0.7)
}else if(idade<18) {
    alert(valor)
}else if(idade<=60 && !membroFidelidade && valor>1000) {
    alert(valor*0.9)
}else if(idade<=60 && !membroFidelidade && valor<1000) {
    alert(valor*0.95)
} else{
    alert("Digite um valor válido")
}