// Función para encriptar el mensaje
function encriptar() {
    // Definimos la contraseña del sistema (simulada para este ejemplo)
    const contraseñaSistema = "123456789";
    const msgError = "Contraseña Incorrecta !!"; // Mensaje de error si la contraseña es incorrecta

    // Obtenemos los valores del mensaje y la contraseña ingresados por el usuario
    const mensaje = document.getElementById("mensaje").value;
    const contraseña = document.getElementById("pass").value;

    // Verificamos si la contraseña ingresada es correcta
    if (contraseñaSistema === contraseña) {
        // Si la contraseña es correcta, limpiamos cualquier mensaje de error anterior
        document.getElementById("error").innerHTML = "";
        // Encriptamos el mensaje usando la función btoa() que codifica una cadena en base64
        const encript = btoa(mensaje);
        // Mostramos el mensaje encriptado en la página
        document.getElementById("encriptado1").innerHTML = encript;
    } else {
        // Si la contraseña es incorrecta, mostramos el mensaje de error
        document.getElementById("error").innerHTML = msgError;
    }
}

// Función para desencriptar el mensaje
function desencriptar() {
    // Obtenemos el mensaje encriptado ingresado por el usuario
    const mensajeDescencriptado = document.getElementById("desencriptar1").value;
    const errorElement = document.getElementById("error");

    // Verificamos si se ingresó un mensaje encriptado
    if (mensajeDescencriptado.trim() === "") {
        errorElement.innerHTML = "Por favor, ingrese un mensaje encriptado.";
        document.getElementById("original").innerHTML = "";
    } else {
        errorElement.innerHTML = "";
        try {
            // Intentamos desencriptar el mensaje usando la función atob() que decodifica una cadena en base64
            const desencriptar = atob(mensajeDescencriptado);
            // Mostramos el mensaje desencriptado en la página
            document.getElementById("original").innerHTML = desencriptar;
        } catch (e) {
            // Si hay un error en la desencriptación, mostramos un mensaje de error
            errorElement.innerHTML = "Mensaje encriptado corrompido.";
            document.getElementById("original").innerHTML = "";
        }
    }
}

// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
    // Obtenemos el texto encriptado desde el span en la página
    const textoEncriptado = document.getElementById("encriptado1").innerText;
    if (textoEncriptado) {
        // Usamos la API del portapapeles para copiar el texto
        navigator.clipboard.writeText(textoEncriptado).then(() => {
            // Éxito al copiar el texto (puedes activar una alerta aquí si lo deseas)
            // alert("Texto copiado al portapapeles");
        }).catch(err => {
            // Manejamos cualquier error que ocurra al copiar el texto al portapapeles
            console.error("Error al copiar el texto: ", err);
        });
    }
}
