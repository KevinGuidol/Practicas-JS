// Formas de definir eventos
/* Forma 1 */

//El método ".addEventListener()" permite definir qué evento escuchar sobre cualquier elemento seleccionado.
//El primer parámetro corresponde al nombre del evento y el segunda a la función de respuesta del mismo.

let boton1 = document.getElementById("botonPrincipal1");
boton1.addEventListener("click", respuestaClick);
function respuestaClick (){
    console.log("respuesta evento");
}

/* Forma 2 */
//


/* Forma 3 */