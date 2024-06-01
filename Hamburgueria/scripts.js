const ul = document.querySelector(".lista")
let minhaLi = ''

function formatarEmMoeda(value) {
    const formatar = value.toLocaleString('pt-br', {
        style: 'currency', 
        currency: 'BRL' })
    
    return formatar
}

function mostrarTudo(productsArray) {
    minhaLi = ""

    productsArray.forEach(product => {
        minhaLi += `
            <li>
                <img src=${product.src} alt="imagem X-Bacon Egg">
                <p>${product.name}</p>
                <p class="item-price">${formatarEmMoeda(product.price)}</p>
            </li>
        `
        ul.innerHTML = minhaLi
    })
}

function mapear() {

    const desconto = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9,
    }))

    mostrarTudo(desconto)
}

function somarTudo() {

    const valorDeTudo = menuOptions.reduce((acc, valor) => acc + valor.price, 0)

    ul.innerHTML = `
    <li>
        <p>O valor total dos itens é ${formatarEmMoeda(valorDeTudo)}</p>
    </li>
    `
}

function filtrar() {

    const produtosVeganos = menuOptions.filter(products => products.vegan)

    mostrarTudo(produtosVeganos)
}


