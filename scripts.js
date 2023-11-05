// Valor del ticket
const ticket = 200;

// Descuentos
let descEstudiante = 0.80;
let descTrainee = 0.50;
let descJunior = 0.15;

// Obtenemos los elementos
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

// Función para calcular el pago
function calcularPago(event) {
    event.preventDefault(); // Detener el envío del formulario

    let total = cantidad.value * ticket;
    
    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            break;
        // Agrega casos y descuentos adicionales aquí según corresponda
    }

    switch (categoria.value) {
        case "trainee":
            total = total - (total * descTrainee);
            break;
        // Agrega casos y descuentos adicionales aquí según corresponda
    }

    switch (categoria.value) {
        case "junior":
            total = total - (total * descJunior);
            break;
        // Agrega casos y descuentos adicionales aquí según corresponda
    }

    totalPagar.textContent = `Total a Pagar: $ ${total}`;
}

// Agregar el evento de escucha al botón de resumen
btnResumen.addEventListener('click', calcularPago);