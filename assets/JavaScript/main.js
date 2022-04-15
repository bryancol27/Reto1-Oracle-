document.getElementById("Encriptar").addEventListener("click", () => incriptar(document.getElementById("textAreaUser").value));
document.getElementById("Desencriptar").addEventListener("click", () => desencriptar(document.getElementById("textAreaUser").value));
const respuesta = document.getElementById("respuesta");
const btnCopiar = document.getElementById("copyBtn");
btnCopiar.addEventListener("click", copiar);

const incriptar = (texto) => {
    const rt1 = texto.split('a').join("ai").split('e').join('enter').split('i').join('imes').split('o').join('ober').split('u').join('ufat').toLowerCase();
    document.getElementById("textoResultado").style.display = "none";
    respuesta.focus();
    respuesta.id = "nuevoPlace"
    btnCopiar.style.visibility = "visible"

    respuesta.innerHTML = rt1;
};

const desencriptar = (texto) => {
    const rt1 = texto.split('ufat').join('u').split('ober').join('o').split('imes').join('i').split('enter').join('e').split('ai').join('a').toLowerCase();
    document.getElementById("textoResultado").style.display = "none";
    respuesta.focus();
    respuesta.id = "nuevoPlace"
    btnCopiar.style.visibility = "visible"

    respuesta.innerHTML = rt1;
};

function copiar(){
    let respuesta2 = document.getElementById("nuevoPlace");
    respuesta2.select();
    document.execCommand("copy");
}




