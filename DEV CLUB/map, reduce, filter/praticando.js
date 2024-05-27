const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const valorAtualizado = companies.map(empresas => {
    
    return {
        name: empresas.name,
        marketValue: empresas.marketValue + (empresas.marketValue * 0.1),
        CEO: empresas.CEO,
        foundedOn: empresas.foundedOn }
})

const empresasAntigas = companies.filter(empresas => empresas.foundedOn < 1990 ? true : false)

const valorTotal = empresasAntigas.reduce((acc, valor) => { return acc + valor.marketValue},0)

console.log(valorTotal)