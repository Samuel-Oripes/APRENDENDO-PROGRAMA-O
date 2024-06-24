const perfil = document.querySelector(".div-perfil")
const mascaraForm = document.querySelector(".mascara-formulario")
const menu = document.querySelector(".div-menu")
const lembrete = document.querySelector(".div-lembrete")
const cronograma = document.querySelector(".calendario")

function chamarCronograma(){
    cronograma.style.visibility = "visible"
    cronograma.style.top = "65px"
    perfil.style.visibility = "hidden"
    menu.style.visibility = "hidden"
    lembrete.style.visibility = "hidden"
    mascaraForm.style.visibility = "visible"
    perfil.style.left = "-400px"
    lembrete.style.top = "-200px"
    menu.style.right = "-200px"
}

function chamarLembrete(){
    lembrete.style.visibility = "visible"
    lembrete.style.top = "70px"
    mascaraForm.style.visibility = "visible"
    perfil.style.visibility = "hidden"
    menu.style.visibility = "hidden"
    cronograma.style.visibility = "hidden"
    perfil.style.left = "-400px"
    menu.style.right = "-200px"
    cronograma.style.top = "-300px"
}

function chamarMenu(){
    menu.style.visibility = "visible"
    menu.style.right = "0"
    mascaraForm.style.visibility = "visible"
    perfil.style.visibility = "hidden"
    lembrete.style.visibility = "hidden"
    cronograma.style.visibility = "hidden"
    perfil.style.left = "-400px"
    lembrete.style.top = "-200px"
    cronograma.style.top = "-300px"
}

function chamarPerfil(){
    perfil.style.visibility = "visible"
    perfil.style.left = "0"
    mascaraForm.style.visibility = "visible"
    menu.style.visibility = "hidden"
    lembrete.style.visibility = "hidden"
    cronograma.style.visibility = "hidden"
    lembrete.style.top = "-200px"
    menu.style.right = "-200px"
    cronograma.style.top = "-300px"
}

function fecharAba(){
    mascaraForm.style.visibility = "hidden"
    setTimeout(function(){
        perfil.style.visibility = "hidden"
        menu.style.visibility = "hidden"
        lembrete.style.visibility = "hidden"
        cronograma.style.visibility = "hidden"
    },1000)
    perfil.style.left = "-400px"
    lembrete.style.top = "-200px"
    menu.style.right = "-200px"
    cronograma.style.top = "-300px"
}

let calendario = document.querySelector(".numero-dias")

for ( i= 1; i < 31; i++){
    calendario.innerHTML += '<span>'+i+'</span>';
}