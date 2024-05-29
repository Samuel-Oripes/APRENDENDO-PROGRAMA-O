const form = document.querySelector(".formulario-fale-conosco")
const mascaraForm = document.querySelector(".mascara-formulario")

function abrirFormulario(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascaraForm.style.visibility = "visible"
    mascaraForm.style.opacity = "1"
}

function fecharFormulario(){
    form.style.left = "-150px"
    form.style.transform = "translateX(-50%)"
    mascaraForm.style.visibility = "hidden"
    mascaraForm.style.opacity = "0"
}
