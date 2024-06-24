const perfil = document.querySelector(".div-perfil")
const mascaraForm = document.querySelector(".mascara-formulario")
const menu = document.querySelector(".div-menu")
const lembrete = document.querySelector(".div-lembrete")
const cronograma = document.querySelector(".calendario")

function chamarCronograma(){
    cronograma.style.left = "50%"
    perfil.style.left = "-80%"
    menu.style.right = "-50%"
    lembrete.style.left = "-50%"
    mascaraForm.style.visibility = "visible"
}

function chamarLembrete(){
    lembrete.style.left = "50%"
    mascaraForm.style.visibility = "visible"
    perfil.style.left = "-80%"
    menu.style.right = "-50%"
    cronograma.style.left = "-50%"
}

function chamarMenu(){
    menu.style.right = "0"
    mascaraForm.style.visibility = "visible"
    perfil.style.left = "-80%"
    lembrete.style.left = "-50%"
    cronograma.style.left = "-50%"
}

function chamarPerfil(){
    perfil.style.left = "0"
    mascaraForm.style.visibility = "visible"
    menu.style.right = "-50%"
    lembrete.style.left = "-50%"
    cronograma.style.left = "-50%"
}

function fecharAba(){
    mascaraForm.style.visibility = "hidden"
    perfil.style.left = "-80%"
    menu.style.right = "-50%"
    lembrete.style.left = "-50%"
    cronograma.style.left = "-50%"
}

let calendario = document.querySelector(".numero-dias")

for ( i= 1; i < 31; i++){
    calendario.innerHTML += '<span>'+i+'</span>';
}