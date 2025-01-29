/************************************************* poner movimiento on scroll *********************************/////////////
// esta funcion comprueba si un elemento esta visible en pantalla
function isVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// cuando se carga la página...
window.addEventListener('DOMContentLoaded', (ev0) => {
        // asignamos un evento scroll...
	window.addEventListener('scroll', (ev1) => {
                // y a todos los elementos con la clase paused...
		document.querySelectorAll(".paused").forEach(elm => {
			if (isVisible(elm)) // que sean visibles...
				elm.classList.remove("paused"); // les quitamos la clase paused
		})
	});
});

/************************************************* Abrir mail con texto predefinido *********************************/////////////
function enviarCorreo() {
    // Obtener valores del formulario
    let nombre = encodeURIComponent(document.getElementById("nombre").value);
    let mensaje = encodeURIComponent(document.getElementById("texto").value);

    // Validar que los campos no estén vacíos
    if (!nombre || !mensaje) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
    }

    // Construir el mailto dinámicamente
    let destinatario = "lucasbonadies@gmail.com";
    let asunto = "Consulta Laboral de " + nombre;
    let body = "Hola, mi nombre es " + nombre + ".%0D%0A%0D%0A" + mensaje + "%0D%0A%0D%0A¡Gracias!";

    // Redirigir a mailto
    window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${body}`;
}