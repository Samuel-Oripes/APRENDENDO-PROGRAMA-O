const resultado = document.querySelector('.resultado')
const seusPontos = document.querySelector('#seus-pontos')
const pontosComputador = document.querySelector('#pontos-computador')

let somaSeusPontos = 0
let somaPontosComputador = 0

const jogadaHumano = (escolhaHumano) => {

    jokenpô(escolhaHumano, escolhaComputador())
}

const escolhaComputador = () => {
    const opção = ['pedra', 'papel', 'tesoura']
    const sorteio = Math.floor(Math.random() * 3)

    return opção[sorteio]
}

const jokenpô = (humano, maquina) => {

    console.log('humano: ' + humano + '; ' + 'maquina: ' + maquina)

    if (humano == maquina) {
        resultado.innerHTML = 'Deu Empate!'
    } else if (
        humano == 'pedra' && maquina == 'tesoura' ||
        humano == 'papel' && maquina == 'pedra' ||
        humano == 'tesoura' && maquina == 'papel'
    ) {
        resultado.innerHTML = 'Você Ganhou!'
        somaSeusPontos++
        seusPontos.innerHTML = somaSeusPontos
    } else {
        resultado.innerHTML = 'Você Perdeu!'
        somaPontosComputador++
        pontosComputador.innerHTML = somaPontosComputador
    }
}