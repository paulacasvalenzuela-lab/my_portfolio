const botones  = document.querySelectorAll('.filtro-btn');
const tarjetas = document.querySelectorAll('.work-card');

// creamos una funcion
function filtrarProyectos(categoriaSeleccionada) {

//    requisitos para que funcione el filtro:
    tarjetas.forEach(function(tarjeta) {
        const categoriaTarjeta = tarjeta.dataset.categoria;

        if (categoriaSeleccionada === 'todos' || categoriaTarjeta === categoriaSeleccionada) {
            tarjeta.classList.remove('oculto');
        } else {
            tarjeta.classList.add('oculto');
        }
    });
}

// Asignar evento a cada botón 
botones.forEach(function(boton) {
    boton.addEventListener('click', function() {

        // Desactivar todos los botones
        botones.forEach(function(b) {
            b.classList.remove('activo');
        });

        // Activar el botón pulsado
        boton.classList.add('activo');

        // Leer la categoría del botón y llamar a la función
        const categoria = boton.dataset.filtro;
        filtrarProyectos(categoria);
    });
});