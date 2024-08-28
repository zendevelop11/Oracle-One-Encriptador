var btnEncriptar = document.querySelector(".boton-encriptar");
var btnDesencriptar = document.querySelector(".boton-desencriptar");
var contenedorImagen = document.querySelector(".contenedor-imagen");
var contenedorMensaje =  document.querySelector(".contenedor-mensaje");
var resultado = document.querySelector(".parrafo-resultado");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function ocultar(){
    contenedorImagen.classList.add("ocultar");
    contenedorMensaje.classList.add("ocultar");
}

function getTexto(){
    var texto = document.querySelector(".caja-texto");
    console.log(texto.value)
    return texto.value;
}

function encriptar(texto){
    var texto = getTexto();
    resultado.textContent =  encriptarTexto(texto);
}

function desencriptar(texto){
    var texto =  getTexto();
    resultado.textContent = desencriptarTexto(texto);
}

function validarTexto(texto) {
    // Verifica que el texto contenga solo letras minúsculas y no tenga acentos ni caracteres especiales
    var regex = /^[a-z\s]+$/;
    if (regex.test(texto)) {
        return true;
    } else {
        alert("El texto proporcionado no cumple con los requisitos para ser encriptado, verifique e intente nuevamente:");
        return false;
    }
}

function encriptarTexto(texto) {
    if (validarTexto(texto)) {
        ocultar();
        // Reemplaza cada letra según las reglas establecidas
        var textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoEncriptado;
    }
}

function desencriptarTexto(texto) {
    if (validarTexto(texto)) {
         ocultar();
        // Reemplaza las secuencias encriptadas con las letras originales
        var textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoDesencriptado;
    }
}

const btnCopiar = document.querySelector(".boton-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".parrafo-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Se copio con exito"); 
});