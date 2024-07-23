// Formas de definir eventos
/* Forma 1 */

//El método ".addEventListener()" permite definir qué evento escuchar sobre cualquier elemento seleccionado.
//El primer parámetro corresponde al nombre del evento y el segunda a la función de respuesta del mismo.

let boton1 = document.getElementById("botonPrincipal1");
boton1.addEventListener("click", respuestaClick);
function respuestaClick (){
    console.log("Respuesta evento 1");
}

/* Forma 2 */
/* Podemos emplear una propiedad del nodo para definir la respuesta al evento, identificandola con el prefijo "on" 
y el nombre del evento*/
//Es posible emplear funciones anonimas para definir el manejador del evento

let boton2 = document.getElementById("botonPrincipal2")
boton2.onclick = () => {console.log("Respuesta evento 2")}

/* Forma 3 */
//Determinar el evento en el archivo HTML
/* <input type="button" value="CLICK2" onclick="alert('Respuesta evento 3')" */


// Los eventos más comunes son "mouse", "teclado", "change", "input", "submit" y otros.

// Eventos de mouse

//onmousedown/onmouseup: Se oprime/suelta el botón del ratón sobre el elemento.
//onmousemove: Se activa al pasar por encima del elemento.
//onmouseover/onmouseout: El puntero del mouse se mueve sobre/sale del elemento.
//onclick: Se activa después de mousedown o mouseup sobre el elemento

//Eventos de teclado

let inputT1 = document.getElementById("teclado1");
let inputT2 = document.getElementById("teclado2");
//keydown: Cuando se presiona
inputT1.onkeydown = () => {console.log("keydown")}
//keyup: Cuando se suelta
inputT2.onkeyup = () => {console.log("keyup");}

//Evento change 
/* Se ativa cuando se detecta un cambio en el valor del elemento, es decir, cuando se da por terminada la interacción
con el elemento, siempre y cuando el mismo haya sido modificado. */
inputChange = document.getElementById("change");
inputChange.onchange = () => {console.log("change");};

//Evento input
/* Se activa cada vez que se modifica el elemento, esta vez en tiempo real */

let inputInput = document.getElementById("input");
inputInput.addEventListener('input', () => {
console.log(inputInput.value)})

//Evento submit
/* Se activa cuando el formulario es enviado */

let miForm =
document.getElementById("formulario");
miForm.addEventListener("submit", validarFormulario);

function validarFormulario (e){
    e.preventDefault();
        console.log("Formulario Enviado");
    }

//Ejemplo aplicado

let miFormulario =
document.getElementById("formulario1");
miFormulario.addEventListener("submit", validarFormulario1);

function validarFormulario1 (e) {
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento dedse el cual se disparó el evento
    let formulario = e.target
    //Obtenemos el valor del primer hijo <input type="text"
    console.log(formulario.children[0].value);
    //Obtenemos el valor del seungod hijo <input type="number"
    console.log(formulario.children[1].value);
}