// Escreva	um	programa	para	ler	2	valores	(considere	que		não	serão	
//     informados	valores	iguais)	e	escrever	o	maior	deles.	

// let valor1 = 30
// let valor2 = 20

// if (valor1>valor2) {
//     console.log("Valor1 é maior que valor2");  
// } else {
//     console.log("Valor2 é maior que valor1");    
// }

// 2. Escreva	um	programa	para	ler	o	ano	de	nascimento	de	uma	pessoa	e	
// escrever	uma	mensagem	que	diga	se	ela	poderá	ou	não	votar	este	ano	
// (não	é	necessário	considerar	o	mês	em	que	ela	nasceu).	

// let anoDeNascimento = 2000
// let anoAtual = 2025
// let votar = anoAtual - anoDeNascimento

// if (votar >=16) {
//     console.log("O meliante pode votar");       
// } else {
//     console.log("O meliante não pode votar");       
// }

// 3. Escreva	um	programa	que	verifique	a	validade	de	uma	senha	fornecida	
// pelo	usuário.	A	senha	válida	é	o	número	1234.	Devem	ser	impressas	as	
// seguintes	mensagens:		
// ACESSO	PERMITIDO	caso	a	senha	seja	válida.		
// ACESSO	NEGADO	caso	a	senha	seja	inválida.	

// let senha = 1234

// if (senha === 1234) {
//     console.log("A senha é válida");    
// } else {
//     console.log("A senha não é válida");    
// }

// 4. As	maçãs	custam	R$	0,30	cada	se	forem	compradas	menos	do	que	uma	
// dúzia,	e	R$	0,25	se	forem	compradas	pelo	menos	doze.	Escreva	um	
// programa	que	leia	o	número	de	maçãs	compradas,	calcule	e	escreva	o	
// valor	total	da	compra.	

let qtd = 10

if (qtd < 12) {
    console.log(`O valor é de: ${(qtd*0.3).toFixed(2)}`);  
} else {
    console.log(`O valor é de: ${(qtd*0.25).toFixed(2)}`);    
}