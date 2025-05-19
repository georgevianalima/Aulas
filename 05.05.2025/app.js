// //Capturar elemento dentro do DOM
// let titulo = document.querySelector('h1')
// let titulo2 = document.querySelector('.titulo')
// let titulo3 = document.querySelector('#titulo')

// //menos usados hoje em dia
// let titulo4 = document.getElementsByTagName("h1")
// let titulo5 = document.getElementsByClassName("titulo")
// let titulo6 = document.getElementById("titulo")
// let body = document.querySelector("body")
// //preencher o conteudo de tags

// //titulo.innerText = "Ola mundo"
// //body.innerHTML += '<h1>Ola mundo 2</h1>'

// //como adiciona remove e verifica o valor de classes
// titulo3.classList.add("darkmode")
// //titulo3.classList.remove("darkmode")
// let classe = titulo3.className
// console.log(classe);

// //titulo3.classList.remove("titulo")


let body = document.querySelector("body")
let header = document.querySelector("#header")
let icone = document.querySelector("i")
let main = document.querySelector("#main")
let form = document.querySelector("#form")
let button = document.querySelector("button")
function mode() {
    let classe = header.className
    if (classe !="whiteMode") {
        header.classList.add("whiteMode")
        icone.classList.add("whiteMoon")
        main.classList.add("main")
        form.classList.add("form")
        button.classList.add("button")
        
    }else{
        header.classList.remove("whiteMode")
        icone.classList.remove("whiteMoon")
        main.classList.remove("main")
        form.classList.remove("form")
        button.classList.remove("button")
    }
    
}

icone.addEventListener("click",mode)
