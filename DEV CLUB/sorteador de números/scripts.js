const botao = document.querySelector(".sorteio")

function sorteioDosNumeros(){

    const minimo = Math.ceil(document.querySelector("#valor-mínimo").value)
    const maximo = Math.floor(document.querySelector("#valor-máximo").value)

    if(minimo >= maximo){
        alert("O valor mínimo tem que ser MENOR que o valor máximo")
    }

    else{
        const resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

        alert(resultado)
    }
}

botao.addEventListener("click", sorteioDosNumeros)
