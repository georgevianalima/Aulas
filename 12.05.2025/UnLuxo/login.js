const usuarios = [
    { id: 1, email: 'usuario1@example.com', senha: 'senha123' },
    { id: 2, email: 'usuario2@example.com', senha: 'minhasenha' },
    { id: 3, email: 'usuario3@example.com', senha: '12345678' },
    { id: 4, email: 'usuario4@example.com', senha: 'abc12345' },
    { id: 5, email: 'usuario5@example.com', senha: 'senhaSegura!' },
    { id: 6, email: 'usuario6@example.com', senha: 'passw0rd' },
    { id: 7, email: 'usuario7@example.com', senha: 'qwerty123' },
    { id: 8, email: 'usuario8@example.com', senha: 'meuacesso' },
    { id: 9, email: 'usuario9@example.com', senha: '123abc456' },
    { id: 10, email: 'usuario10@example.com', senha: 'acesso123' },
    { id: 11, email: 'usuario11@example.com', senha: 'segredo11' },
    { id: 12, email: 'usuario12@example.com', senha: 'login12ok' },
    { id: 13, email: 'usuario13@example.com', senha: 'senha@2023' },
    { id: 14, email: 'usuario14@example.com', senha: 'teste14' },
    { id: 15, email: 'usuario15@example.com', senha: 'senhaTop15' },
    { id: 16, email: 'usuario16@example.com', senha: 'super16' },
    { id: 17, email: 'usuario17@example.com', senha: 'senhaDe17' },
    { id: 18, email: 'usuario18@example.com', senha: 'user18senha' },
    { id: 19, email: 'usuario19@example.com', senha: 'senha_19!' },
    { id: 20, email: 'usuario20@example.com', senha: 'pass20seguro' }
  ];


function login() {
    let inputEmail = document.querySelector("#inputEmail").value 
    let inputSenha = document.querySelector("#inputSenha").value
    let form = document.querySelector("#form")
    let userExists = usuarios.find((usuario)=> usuario.email === inputEmail && usuario.senha===inputSenha )
    let paragrafo = document.querySelector("p")
    if(userExists) {
        window.location.href = "dashboard.html"
        return
    }else{
        if (!paragrafo) {
            let paragrafo = document.createElement("p")
            paragrafo.innerText = "Credenciais Inválidas"
            paragrafo.classList.add("textRed")
            form.appendChild(paragrafo)
            
        }
        
    }
}
button.addEventListener("click",login)
