document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.getElementById("whatsappButton");

    whatsappButton.addEventListener("click", function () {
        whatsapp();
    });

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Capitalizamos la primera letra del mensaje antes de enviar el formulario
        var mensajeTextarea = document.querySelector('.selec1[name="mensaje"]');
        mensajeTextarea.value = capitalizarPrimeraLetra(mensajeTextarea.value);

        // El formulario se enviará si esta función devuelve true
        return true;
    });
});

function whatsapp() {
    var nombre = document.querySelector('.selec1[name="nombre"]').value;
    var mensaje = document.querySelector('.selec1[name="mensaje"]').value;

    var numero = "+52 477 648 3702"; // Número de la fábrica
    var mensajeCapitalizado = capitalizarPrimeraLetra(mensaje);

    var informacion = encodeURIComponent("Mi nombre es " + nombre + ". " + mensajeCapitalizado);

    var enlace = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + informacion;
    window.open(enlace, "_blank");
}

function capitalizarPrimeraLetra(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function enviarFormulario() {
    // Obtener los valores del nombre y el mensaje
    var nombreInput = document.querySelector('.selec1[name="nombre"]');
    var mensajeTextarea = document.querySelector('.selec1[name="mensaje"]');

    // Realizar validación básica: asegurarse de que el nombre y el mensaje no estén vacíos
    if (nombreInput.value.trim() === '') {
        // Si el nombre está vacío, mostrar el mensaje de retroalimentación y evitar que el formulario se envíe
        document.getElementById('nombreVacio').classList.remove('d-none');
        return false; 
    } else {
        // Si el nombre no está vacío, ocultar el mensaje de retroalimentación relacionado con el nombre
        document.getElementById('nombreVacio').classList.add('d-none');
    }

    if (mensajeTextarea.value.trim() === '') {
        // Si el mensaje está vacío, mostrar el mensaje de retroalimentación y evitar que el formulario se envíe
        document.getElementById('mensajeVacio').classList.remove('d-none');
        return false; 
    } else {
        // Si el mensaje no está vacío, ocultar el mensaje de retroalimentación relacionado con el mensaje
        document.getElementById('mensajeVacio').classList.add('d-none');
    }

    // Si la validación pasa, capitaliza la primera letra del mensaje
    mensajeTextarea.value = capitalizarPrimeraLetra(mensajeTextarea.value);

    // No llamamos a la función de WhatsApp aquí, para que no se abra WhatsApp si los campos están vacíos

    // Devuelve true para permitir que el formulario se envíe
    return true;
}






