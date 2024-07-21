const carrito = [
    { nombre: 'Kevin', edad: 22, pareja: true },
    { nombre: 'Rocio', edad: 25, pareja: true },
    { nombre: 'Marcos', edad: 27, pareja: true },
    { nombre: 'Gaston', edad: 35, pareja: true },
];

// Función para encontrar y eliminar un objeto del array
function eliminarDelCarrito(nombre) {
    // Encontrar el índice del objeto con nombre igual al proporcionado
    let indice = carrito.findIndex(persona => persona.nombre === nombre);

    // Verificar si se encontró el objeto
    if (indice !== -1) {
        // Usar splice para eliminar el objeto en el índice encontrado
        carrito.splice(indice, 1);
        console.log(`Se eliminó correctamente a ${nombre} del carrito.`);
    } else {
        console.log(`${nombre} no se encontró en el carrito.`);
    }
}

// Ejemplo de uso: Eliminar a 'Kevin' del carrito
eliminarDelCarrito('Kevin');

// Mostrar el carrito actualizado
console.log("Carrito actualizado:");
console.log(carrito.map(persona => `${persona.nombre} || ${persona.edad} || ${persona.pareja}`));