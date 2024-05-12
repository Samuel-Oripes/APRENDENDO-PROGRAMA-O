const botaoConversor = document.querySelector(".botao-conversor")   // linka o botão ao JS
const moedaSelecionada1 = document.querySelector(".moeda-selecionada-1") // MOEDA A CONVERTER ESCOLHIDA
const moedaSelecionada2 = document.querySelector(".moeda-selecionada-2") // MOEDA CONVERTIDA ESCOLHIDA



function converterValores() {    // FUNÇÃO //
    const inputMoedaValor = document.querySelector(".input-moeda").value    // PEGA O QUE FOI DIGITADO NO INPUT
    const paragrafoComValorAConverter = document.querySelector("#valor-a-converter")    // VALOR EM REAL
    const paragrafoComValorConvertido = document.querySelector("#valor-convertido")    // VALOR EM DOLAR

    const realParaDolar = 0.19     // ESPAÇO DE MEMÓRIA QUE QUARDA O VALOR DO DOLAR
    const realParaEuro = 0.18   // ESPAÇO DE MEMÓRIA QUE QUARDA O VALOR DO EURO
    const realParaLibra = 0.15
    const realParaBitcoin = 0.0000031

    const dolarParaReal = 5.16
    const dolarParaEuro = 0.93
    const dolarParaLibra = 0.80
    const dolarParaBitcoin = 0.000016

    const euroParaReal = 5.55
    const euroParaDolar = 1.08
    const euroParaLibra = 0.86
    const euroParaBitcoin = 0.000017

    const libraParaReal = 6.46
    const libraParaDolar = 1.25
    const libraParaEuro = 1.16
    const libraParaBitcoin = 0.000020

    const bitcoinParaReal = 317623
    const bitcoinParaDolar = 6582
    const bitcoinParaEuro = 57166.06
    const bitcoinParaLibra = 49165.67

// CONVERSÃO REAL

    if (moedaSelecionada1.value == "real") {
        paragrafoComValorAConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputMoedaValor) // O TEXTO SERÁ TROCADO PELO O QUE FOI DIGITADO NO INPUT E DEIXARÁ NO FORMATO DO REAL    
    }

    if (moedaSelecionada1.value == "dolar") {
        paragrafoComValorAConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO DOLAR    
    }

    if (moedaSelecionada1.value == "euro") {
        paragrafoComValorAConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor)
    }

    if (moedaSelecionada1.value == "libra") {
        paragrafoComValorAConverter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValor)
    }

    if (moedaSelecionada1.value == "bitcoin") {
        paragrafoComValorAConverter.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputMoedaValor)
    }

// CONVERSÃO DO REAL

    if (moedaSelecionada2.value == "real" && moedaSelecionada1.value == "real") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputMoedaValor) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO REAL
    }

    if (moedaSelecionada2.value == "real" && moedaSelecionada1.value == "dolar") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputMoedaValor / realParaDolar) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO REAL
    }

    if (moedaSelecionada2.value == "real" && moedaSelecionada1.value == "euro") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputMoedaValor / realParaEuro) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO REAL
    }

    if (moedaSelecionada2.value == "real" && moedaSelecionada1.value == "libra") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputMoedaValor / realParaLibra) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO REAL
    }

    if (moedaSelecionada2.value == "real" && moedaSelecionada1.value == "bitcoin") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputMoedaValor / realParaBitcoin) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO REAL
    }

// CONVERSÃO DO DOLAR

    if (moedaSelecionada2.value == "dolar" && moedaSelecionada1.value == "dolar") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO DOLAR    
    }

    if (moedaSelecionada2.value == "dolar" && moedaSelecionada1.value == "real") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor / dolarParaReal) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO DOLAR    
    }

    if (moedaSelecionada2.value == "dolar" && moedaSelecionada1.value == "euro") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor / dolarParaEuro) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO DOLAR    
    }

    if (moedaSelecionada2.value == "dolar" && moedaSelecionada1.value == "libra") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor / dolarParaLibra) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO DOLAR    
    }

    if (moedaSelecionada2.value == "dolar" && moedaSelecionada1.value == "bitcoin") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor / dolarParaBitcoin) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO DOLAR    
    }

// CONVERSÃO EURO

    if (moedaSelecionada2.value == "euro" && moedaSelecionada1.value == "euro") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO EURO    
    }

    if (moedaSelecionada2.value == "euro" && moedaSelecionada1.value == "real") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor / euroParaReal) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO EURO    
    }

    if (moedaSelecionada2.value == "euro" && moedaSelecionada1.value == "dolar") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor / euroParaDolar) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO EURO    
    }

    if (moedaSelecionada2.value == "euro" && moedaSelecionada1.value == "libra") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor / euroParaLibra) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO EURO    
    }

    if (moedaSelecionada2.value == "euro" && moedaSelecionada1.value == "bitcoin") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor / euroParaBitcoin) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO EURO    
    }

//CONVERSÃO LIBRA
   
    if (moedaSelecionada2.value == "libra" && moedaSelecionada1.value == "libra") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValor) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DA LIBRA 
    }

    if (moedaSelecionada2.value == "libra" && moedaSelecionada1.value == "real") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValor / libraParaReal) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DA LIBRA 
    }

    if (moedaSelecionada2.value == "libra" && moedaSelecionada1.value == "dolar") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValor / libraParaDolar) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DA LIBRA 
    }

    if (moedaSelecionada2.value == "libra" && moedaSelecionada1.value == "euro") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValor / libraParaEuro) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DA LIBRA 
    }

    if (moedaSelecionada2.value == "libra" && moedaSelecionada1.value == "bitcoin") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValor / libraParaBitcoin) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DA LIBRA 
    }

// CONVERSÃO BITCOIN

    if (moedaSelecionada2.value == "bitcoin" && moedaSelecionada1.value == "bitcoin") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputMoedaValor) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO BITCOIN
    }

    if (moedaSelecionada2.value == "bitcoin" && moedaSelecionada1.value == "real") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputMoedaValor / bitcoinParaReal) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO BITCOIN
    }

    if (moedaSelecionada2.value == "bitcoin" && moedaSelecionada1.value == "dolar") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputMoedaValor / bitcoinParaDolar) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO BITCOIN
    }

    if (moedaSelecionada2.value == "bitcoin" && moedaSelecionada1.value == "euro") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputMoedaValor / bitcoinParaEuro) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO BITCOIN
    }

    if (moedaSelecionada2.value == "bitcoin" && moedaSelecionada1.value == "libra") {
        paragrafoComValorConvertido.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputMoedaValor / bitcoinParaLibra) // O TEXTO SERÁ TROCADO PELO VALOR CONVERTIDO E DEIXARÁ NO FORMATO DO BITCOIN
    }
}

function trocarMoeda1(){
    const nomeMoeda1 = document.querySelector("#moeda1-nome")   //LINKA O PARÁGRAFO AO JS
    const imagemMoeda1 = document.querySelector(".imagem-moeda1")   //LINKA A IMAGEM AO JS

    if(moedaSelecionada1.value == "dolar"){
        nomeMoeda1.innerHTML = "Dolar americano"    
        imagemMoeda1.src = "./assets/dolar.png"     // A IMAGEM E O TEXTO SERÃO ALTERADOS PARA OS PARÂMETROS DO DOLAR
    }

    if(moedaSelecionada1.value == "real"){
        nomeMoeda1.innerHTML = "Real Brasileiro"
        imagemMoeda1.src = "./assets/real.png"      // A IMAGEM E O TEXTO SERÃO ALTERADOS PARA OS PARÂMETROS DO REAL
    }

    if(moedaSelecionada1.value == "euro"){
        nomeMoeda1.innerHTML = "Euro"
        imagemMoeda1.src = "./assets/euro.png"      // A IMAGEM E O TEXTO SERÃO ALTERADOS PARA OS PARÂMETROS DO EURO
    }

    if(moedaSelecionada1.value == "libra"){
        nomeMoeda1.innerHTML = "Libra Esterlina"
        imagemMoeda1.src = "./assets/libra 1.png"      // A IMAGEM E O TEXTO SERÃO ALTERADOS PARA OS PARÂMETROS DA LIBRA
    }
    if(moedaSelecionada1.value == "bitcoin"){
        nomeMoeda1.innerHTML = "Bitcoin"
        imagemMoeda1.src = "./assets/bitcoin 1.png"      // A IMAGEM E O TEXTO SERÃO ALTERADOS PARA OS PARÂMETROS DO BITCOIN
    }
    
converterValores()      //CHAMA A PRIMEIRA FUNÇÃO SÓ DE ALTERAR A MOEDA
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
    
    if(moedaSelecionada2.value == "real"){
        nomeMoeda2.innerHTML = "Real Brasileiro"
        imagemMoeda2.src = "./assets/real.png"      // A IMAGEM E O TEXTO SERÃO ALTERADOS PARA OS PARÂMETROS DO EURO
    }

    if(moedaSelecionada2.value == "libra"){
        nomeMoeda2.innerHTML = "Libra Esterlina"
        imagemMoeda2.src = "./assets/libra 1.png"      // A IMAGEM E O TEXTO SERÃO ALTERADOS PARA OS PARÂMETROS DO EURO
    }
    if(moedaSelecionada2.value == "bitcoin"){
        nomeMoeda2.innerHTML = "Bitcoin"
        imagemMoeda2.src = "./assets/bitcoin 1.png"      // A IMAGEM E O TEXTO SERÃO ALTERADOS PARA OS PARÂMETROS DO EURO
    }

converterValores()      //CHAMA A PRIMEIRA FUNÇÃO SÓ DE ALTERAR A MOEDA
}

moedaSelecionada2.addEventListener("change", trocarMoeda2)  // OBSERVA QUANDO OUVE TROCA NO SELECT E CHAMA A FUNÇÃO
moedaSelecionada1.addEventListener("change", trocarMoeda1)  // OBSERVA QUANDO OUVE TROCA NO SELECT E CHAMA A FUNÇÃO
botaoConversor.addEventListener("click", converterValores)  // OBSERVA QUANDO O BOTÃO FOI CLICADO E CHAMA A FUNÇÃO
