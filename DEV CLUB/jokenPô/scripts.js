const resultado = document.querySelector(".resultado")
const pontosComputador = document.querySelector("#pontos-computador")
const seusPontos = document.querySelector("#seus-pontos")

let seusPontosAcumulados = 0
let pontosComputadorAcumulados = 0

const pedra = 1
const papel = 2
const tesoura = 3

function sorteio1(){
    const jogadaComputador = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if(pedra == jogadaComputador){
        resultado.innerHTML = "O Computador jogou PEDRA, deu EMPATE!"
    } else if(pedra + 2 == jogadaComputador){
        resultado.innerHTML = "O Computador jogou PAPEL, você PERDEU!"
        pontosComputadorAcumulados += 1
        pontosComputador.innerHTML = pontosComputadorAcumulados
    } else {
        resultado.innerHTML = "O Computador jogou TESOURA, você GANHOU!"
        seusPontosAcumulados += 1
        seusPontos.innerHTML = seusPontosAcumulados
    }
    console.log(jogadaComputador)
}

function sorteio2(){
    const jogadaComputador = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if(papel == jogadaComputador){
        resultado.innerHTML = "O Computador jogou PAPEL, deu EMPATE!"
    } else if(papel < jogadaComputador){
        resultado.innerHTML = "O Computador jogou TESOURA, você PERDEU!"
        pontosComputadorAcumulados += 1
        pontosComputador.innerHTML = pontosComputadorAcumulados
    } else {
        resultado.innerHTML = "O Computador jogou PEDRA, você GANHOU!"
        seusPontosAcumulados += 1
        seusPontos.innerHTML = seusPontosAcumulados
    }
    console.log(jogadaComputador)
}

function sorteio3(){
    const jogadaComputador = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if(tesoura == jogadaComputador){
        resultado.innerHTML = "O Computador jogou TESOURA, deu EMPATE!"
    } else if(tesoura - 2 == jogadaComputador){
        resultado.innerHTML = "O Computador jogou PEDRA, você PERDEU!"
        pontosComputadorAcumulados += 1
        pontosComputador.innerHTML = pontosComputadorAcumulados
    } else {
        resultado.innerHTML = "O Computador jogou PAPEL, você GANHOU!"
        seusPontosAcumulados += 1
        seusPontos.innerHTML = seusPontosAcumulados
    }
    console.log(jogadaComputador)
}

