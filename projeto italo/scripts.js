const perfil = document.querySelector(".div-perfil")
const mascaraForm = document.querySelector(".mascara-formulario")
const menu = document.querySelector(".div-menu")
const lembrete = document.querySelector(".div-lembrete")
const cronograma = document.querySelector(".calendario")

function chamarCronograma(){
    cronograma.style.visibility = "visible"
    perfil.style.visibility = "hidden"
    menu.style.visibility = "hidden"
    lembrete.style.visibility = "hidden"
    mascaraForm.style.visibility = "visible"
}

function chamarLembrete(){
    lembrete.style.visibility = "visible"
    mascaraForm.style.visibility = "visible"
    perfil.style.visibility = "hidden"
    menu.style.visibility = "hidden"
    cronograma.style.visibility = "hidden"
}

function chamarMenu(){
    menu.style.visibility = "visible"
    mascaraForm.style.visibility = "visible"
    perfil.style.visibility = "hidden"
    lembrete.style.visibility = "hidden"
    cronograma.style.visibility = "hidden"
}

function chamarPerfil(){
    perfil.style.visibility = "visible"
    mascaraForm.style.visibility = "visible"
    menu.style.visibility = "hidden"
    lembrete.style.visibility = "hidden"
    cronograma.style.visibility = "hidden"
}

function fecharAba(){
    mascaraForm.style.visibility = "hidden"
    perfil.style.visibility = "hidden"
    menu.style.visibility = "hidden"
    lembrete.style.visibility = "hidden"
    cronograma.style.visibility = "hidden"
}

let calendario = document.querySelector(".numero-dias")

for ( i= 1; i < 31; i++){
    calendario.innerHTML += '<span>'+i+'</span>';
}