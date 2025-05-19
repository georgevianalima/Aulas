let nome = 10

// == Compara valor
// === Compara valor da variavel
// != Negação quando compara somente o valor
// !== Negação que são estritamente de diferentes
// > maior
// < menor
// >= maior ou igual
// <= menor ou igual

// if (nome !== "10") {
//     console.log("Satifez");    
// } else {
//     console.log("Não satifez");    
// }

// exercicios https://professor.luzerna.ifc.edu.br/marcelo-cendron/wp-content/uploads/sites/40/2017/02/lista-exercicios-if-else.pdf
// let numero1 = 21
// let numero2 = 22

// if (numero1 > numero2) {
//     console.log("Número 1 maior que número 2");    
// } else {
//     console.log("Número 2 maior que número 1");        
// }

// let anoDeNascimento = 2000
// let idade = 2025 - anoDeNascimento

// if (idade >= 16) {
//     console.log("O camarada pode votar");        
// } else {
//     console.log("O camarada não pode votar");    
// }

// let senha = "1234"

// if (senha === "12345") {
//     console.log("Senha válida");    
// } else {
//     console.log("Senha inválida");        
// }

// As maças custam R$0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos 12.
//Escreva um programa que leia o número de maças compradas, calcule e escreva o valor total de compra.

// let numeroDeMacas = Number(prompt("Digita o número de maças: "))

// if (numeroDeMacas<12) {
//     alert(`O valor total é de: ${numeroDeMacas*0.3}`)
// } else {
//     alert(`O valor total é de: ${numeroDeMacas*0.25}`)
// }

// let numero1 = 31
// let numero2 = 40
// let numero3 = 50
// if(numero1>numero2 && numero1>numero3 && numero2>numero3 ) {
//     console.log(`${numero1} > ${numero2} > ${numero3}`)
// } else if(numero2>numero1 && numero2>numero3 && numero1>numero3) {
//     console.log(`${numero2} > ${numero1} > ${numero3}`)
// } else if(numero2>numero3 && numero2 > numero1 && numero3>numero1) {
//     console.log(`${numero2} > ${numero3} > ${numero1}`)
// } else if(numero3>numero1 && numero1>numero2 && numero3>numero2) {
//     console.log(`${numero3} > ${numero1} > ${numero2}`)
// }else if(numero3>numero2 && numero3>numero1 && numero2>numero1) {
//     console.log(`${numero3} > ${numero2} > ${numero1}`)
// }else {
//     console(`${numero1} > ${numero3} > ${numero2}`)
// }

// Tendo	como	entrada	a	altura	e	o	sexo	(codificado	da	seguinte	forma:	
//     1:feminino		2:masculino)	de	uma	pessoa,	construa	um	programa	que	
//     calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes		
//     Fórmulas:		-	para	homens:	(72.7	*	Altura)	–	58		-	para	mulheres:	(62.1	*	Altura)	–	44.7		

// let genero = "M"
// let altura = 1.65

// if (genero === "F") {
//     let pesoIdealF = (62.1*altura)-44.7
//     console.log(`O peso ideal é: ${pesoIdealF}`);   
// } else {
//     let pesoIdealM = (72.7*altura)-58
//     console.log(`O peso ideal é: ${pesoIdealM}`);    
// }

