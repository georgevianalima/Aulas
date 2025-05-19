let body = document.querySelector("body")
let header = document.querySelector("#header")
let icone = document.querySelector("i")
let main = document.querySelector("#main")
let form = document.querySelector("#form")
let button = document.querySelector("button")
function mode() {
    let classe = header.className
    if(classe !="whiteMode" ) {
        header.classList.add("whiteMode")
        icone.classList.add("whiteMoon")
        main.classList.add("main")
        form.classList.add("form")
        button.classList.add("button")
    } else {
        header.classList.remove("whiteMode")
        icone.classList.remove("whiteMoon")
        main.classList.remove("main")
        form.classList.remove("form")
        button.classList.remove("button")
    }
}

icone.addEventListener("click",mode)
