const botaoConversor = document.querySelector(".botao-conversor")   // linka o botão ao JS
const moedaSelecionada1 = document.querySelector(".moeda-selecionada-1") // MOEDA A CONVERTER ESCOLHIDA
const moedaSelecionada2 = document.querySelector(".moeda-selecionada-2") // MOEDA CONVERTIDA ESCOLHIDA

function converterValores() {    /* FUNÇÃO */
    const inputMoedaValor = document.querySelector(".input-moeda").value    // PEGA O QUE FOI DIGITADO NO INPUT
    const paragrafoComValorAConverter = document.querySelector("#valor-a-converter")    // VALOR EM REAL
    const paragrafoComValorConvertido = document.querySelector("#valor-convertido")    // VALOR EM DOLAR

    const dolarDoDia = 5.14     // ESPAÇO DE MEMÓRIA QUE QUARDA O VALOR DO DOLAR
    const euroDoDia = 5.54   // ESPAÇO DE MEMÓRIA QUE QUARDA O VALOR DO EURO


    if (moedaSelecionada1.value == "real") {
        paragrafoComValorAConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputMoedaValor) // O TEXTO SERÁ TROCADO PELO O QUE FOI DIGITADO NO INPUT E DEIXARÁ NO FORMATO DO REAL    
    }

    if (moedaSelecionada2.value == "dolar") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor / dolarDoDia) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO DOLAR    
    }

    if (moedaSelecionada2.value == "euro") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor / euroDoDia) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO EURO    
    }
}

function trocarMoeda2(){
    const nomeMoeda2 = document.querySelector("#moeda2-nome")   //LINKA O PARÁGRAFO AO JS
    const imagemMoeda2 = document.querySelector(".imagem-moeda2")   //LINKA A IMAGEM AO JS

    if(moedaSelecionada2.value == "dolar"){
        nomeMoeda2.innerHTML = "Dolar americano"    
        imagemMoeda2.src = "./assets/dolar.png"     // A IMAGEM E O TEXTO SERÃO ALTERADOS PARA OS PARÂMETROS DO DOLAR
    }

    if(moedaSelecionada2.value == "euro"){
        nomeMoeda2.innerHTML = "Euro"
        imagemMoeda2.src = "./assets/euro.png"      // A IMAGEM E O TEXTO SERÃO ALTERADOS PARA OS PARÂMETROS DO EURO
    }
    
converterValores()      //CHAMA A PRIMEIRA FUNÇÃO SÓ DE ALTERAR A MOEDA
}

moedaSelecionada2.addEventListener("change", trocarMoeda2)  // OBSERVA QUANDO OUVE TROCA NO SELECT E CHAMA A FUNÇÃO
botaoConversor.addEventListener("click", converterValores)  // OBSERVA QUANDO O BOTÃO FOI CLICADO E CHAMA A FUNÇÃO
