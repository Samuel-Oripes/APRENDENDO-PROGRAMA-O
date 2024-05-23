const carrinho = [10, 244, 99, 2, 20, 33, 250]
let preçoTotal = 0

carrinho.forEach(valor => {

    if (valor > 30) {
        const desconto = calcularDesconto(valor, 10)
        preçoTotal += valor - desconto
    } else {
        preçoTotal += valor
    }
});

function calcularDesconto(preço, desconto) {
    const resultado = (preço * desconto) / 100
    return resultado
}

console.log(`O valor final da compra foi de: R$ ${preçoTotal}`)
