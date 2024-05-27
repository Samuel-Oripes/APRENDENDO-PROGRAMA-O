const carrinho = [
    { nomeProduto: 'Abóbora', valorPorKg: 5, Kg: 1},
    { nomeProduto: 'Pepino', valorPorKg: 3.55, Kg: 1.3},
    { nomeProduto: 'Limão', valorPorKg: 1.2, Kg: 2},
    { nomeProduto: 'Abacate', valorPorKg: 5.4, Kg: 1.67},
    { nomeProduto: 'Morango', valorPorKg: 11.9, Kg: 3}
]

const preçoTotal = carrinho.reduce( (acc, value) => {
    return acc + (value.valorPorKg * value.Kg)
},0)

console.log(`O valor total da sua compra é de: R$${preçoTotal.toFixed(2)}`)