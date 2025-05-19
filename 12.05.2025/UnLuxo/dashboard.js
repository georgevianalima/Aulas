let produtos = [
    {
        "id": 1,
        "nome": "Camisa Social Slim Masculina",
        "descricao": "Camisa de algodão com corte ajustado, ideal para ambientes formais.",
        "preco": 179.90,
        "categoria": "Camisas",
        "departamento": "Moda Masculina",
        "estoque": 20
    },
    {
        "id": 2,
        "nome": "Vestido Midi Floral",
        "descricao": "Vestido feminino midi com estampa floral e tecido leve.",
        "preco": 249.90,
        "categoria": "Vestidos",
        "departamento": "Moda Feminina",
        "estoque": 15
    },
    {
        "id": 3,
        "nome": "Calça Jeans Skinny Feminina",
        "descricao": "Calça jeans de cintura alta com elastano para maior conforto.",
        "preco": 199.00,
        "categoria": "Calças",
        "departamento": "Moda Feminina",
        "estoque": 30
    },
    {
        "id": 4,
        "nome": "Blazer Masculino Slim Fit",
        "descricao": "Blazer elegante com forro interno e bolsos laterais.",
        "preco": 349.90,
        "categoria": "Blazers",
        "departamento": "Moda Masculina",
        "estoque": 10
    },
    {
        "id": 5,
        "nome": "Camiseta Básica Infantil",
        "descricao": "Camiseta 100% algodão com estampas divertidas para crianças.",
        "preco": 49.90,
        "categoria": "Camisetas",
        "departamento": "Moda Infantil",
        "estoque": 40
    },
    {
        "id": 6,
        "nome": "Jaqueta Corta Vento Unissex",
        "descricao": "Jaqueta leve e resistente à água, ideal para meia estação.",
        "preco": 229.90,
        "categoria": "Jaquetas",
        "departamento": "Moda Unissex",
        "estoque": 12
    },
    {
        "id": 7,
        "nome": "Saia Plissada Midi",
        "descricao": "Saia feminina com tecido fluido e cós elástico.",
        "preco": 139.90,
        "categoria": "Saias",
        "departamento": "Moda Feminina",
        "estoque": 18
    },
    {
        "id": 8,
        "nome": "Polo Masculina Piquet",
        "descricao": "Camisa polo clássica com gola e punhos canelados.",
        "preco": 99.90,
        "categoria": "Polos",
        "departamento": "Moda Masculina",
        "estoque": 25
    },
    {
        "id": 9,
        "nome": "Macacão Curto Infantil",
        "descricao": "Macacão com botão e estampa divertida para crianças pequenas.",
        "preco": 89.90,
        "categoria": "Macacões",
        "departamento": "Moda Infantil",
        "estoque": 22
    },
    {
        "id": 10,
        "nome": "Moletom Oversized Unissex",
        "descricao": "Moletom grosso com capuz e bolso canguru.",
        "preco": 189.90,
        "categoria": "Moletons",
        "departamento": "Moda Unissex",
        "estoque": 17
    }
]

let tbody = document.querySelector("tbody")
function renderData() {
    let newData = produtos.map(produto => {
        let tr = document.createElement("tr")
        tr.innerHTML += `
        <th>${produto.nome}</th>
        <th>${produto.descricao}</th>
        <th>${produto.preco}</th>
        <th>${produto.categoria}</th>
        <th>${produto.departamento}</th>
        <th>${produto.estoque}</th>
        `
        tbody.appendChild(tr)
    })

}
renderData()
let body = document.querySelector("body")
function renderModal() {
    let div = document.createElement("div")
    div.classList.add("modal-overlay")
    div.innerHTML += `
    <div id="createModal" class="modal-content">
        <form>
          <div class="form-group">
              <input type="text" class="form-control" id="inputId" aria-describedby="emailHelp" placeholder="Digite o id">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="InputNome" Aristides="emailHelp" placeholder="Digite seu nome">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputDescricao" aria-describedby="emailHelp" placeholder="Digite sua descricao">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputPreco" indiscrição="emailHelp" placeholder="Digite seu preço">
          </div>
	          <div class="form-group">
              <input type="text" class="form-control" id="inputCategoria" aria-describedby="emailHelp" placeholder="Digite sua Categoria">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputDepartamento" aria-describedby="emailHelp" placeholder="Digite o Departamento">
          </div>
       <div class="form-group">
              <input type="text" class="form-control" id="inputEstoque" aria-describedby="emailHelp" placeholder="Digite a quantidade">
          </div>

          <button type="button" class="btn btn-primary">Enviar</button>
          <button type="removeModal()"  class="btn btn-primary">Remover</button>
        </form>
     </div>
    `
    body.appendChild(div)
}

function removeModal() {
    let modal = document.querySelector(".modal-overlay")
    body.removeChild(modal)
    
}



