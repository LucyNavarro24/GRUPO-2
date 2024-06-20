window.addEventListener("load", inicio, true);

function inicio() {
    document.getElementById("mensaje").addEventListener("keyup", function() {
        this.value = this.value.toUpperCase();
    }, true);
    
    document.getElementById("cifrar").addEventListener("click", function() {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = parseInt(document.getElementById("desp").value);
        document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);
    }, true);
    
    document.getElementById("descifrar").addEventListener("click", function() {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = parseInt(document.getElementById("desp").value);
        document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);
    }, true);
} 

function cifrar(texto, desplazamiento) {
    let resultado = "";
    let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 27 + 27) % 27;

    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            if (abecedario.indexOf(texto[i]) != -1) {
                let posc = (abecedario.indexOf(texto[i]) + desplazamiento) % 27;
                resultado += abecedario[posc];
            } else {
                resultado += texto[i];
            }
        }
    }
    return resultado;
}

function descifrar(texto, desplazamiento) {
    let resultado = "";
    let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 27 + 27) % 27;

    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            if (abecedario.indexOf(texto[i]) != -1) {
                let posc = (abecedario.indexOf(texto[i]) - desplazamiento + 27) % 27;
                resultado += abecedario[posc];
            } else {
                resultado += texto[i];
            }
        }
    }
    return resultado;
}

// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
    // Obtenemos el texto encriptado desde el input en la página
    let textoEncriptado = document.getElementById("mensaje2").value;
    if (textoEncriptado) {
        // Usamos la API del portapapeles para copiar el texto
        navigator.clipboard.writeText(textoEncriptado).then(() => {
            // Éxito al copiar el texto
            //alert("Texto copiado al portapapeles");
        }).catch(err => {
            // Manejamos cualquier error que ocurra al copiar el texto al portapapeles
            console.error("Error al copiar el texto: ", err);
        });
    } else {
        alert("No hay texto para copiar");
    }
}
