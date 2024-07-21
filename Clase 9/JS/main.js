/* En el DOM cada etiqueta HTML es un objeto al que podemos llamar nodo */
/* Las etiquetas anidadas se llaman "nodos hijos" de la etiqueta "nodo padre" */

//Estos objetos son accesibles mediante el objeto global "document".
//Por ej: document.body(Nodo que representa la etiqueta "body")

// Tipos de nodos más usados:

/* 
document: Nodo del que derivan todos los demás nodos.
element: Nodo de cada etiqueta XHTML. Puede contener atributos y derivar nodos.
attr: Nodo que represetna cada atributo de las etiquetas HTML.
text: Nodo que contiene el texto encerrado en una etiqueta.
comment: Nodo que representa los comentarios incluidos en la página HTML.
*/

//Formas más comunes de acceder a los nodos:

//El método "getElementById()" sirve para acceder al elemento con el ID como indentificación.

let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1")
console.log(div.innerHTML);
console.log(parrafo.innerHTML);

//El método "getElementeByClassName()" sirve para acceder a un conjunto de elementos utilizando su "class" como identificación
//(Se retorna un Array de elementos con todas las coincidencias)

let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);

//El método "getElementByTagName()" sirve para acceder a un conjunto de elementos usando el nombre de la etiqueta como identificación.

let contenedores = document.getElementsByTagName("div")
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);

//Ejemplo: Recorre elementos con for...of:

for (const pais of paises) {
    console.log(pais.innerHTML);
}

for (const div of contenedores) {
    console.log(div.innerHTML);
}

//Modificar Nodos
//Con la propiedad "innerText" podemos modificar el contenido textual de algún elemento del DOM.

let titulo = document.getElementById("titulo")
console.log(titulo.innerText);
titulo.innerText = "Hola Mundo"
console.log(titulo.innerText);

/* Con la propiedad "innerHTML" podemos definir el código HTML interno del elemento,
permitiendo desde un string crear una nueva estructura de etiquetas y contenido */
//(Al crear estas etiquetas el navegador genera nuevos nodos con su contenido dentro del elemento)

let container = document.getElementById("contenedor")

container.innerHTML = "<h2>Hola mundo!</h2><p>Lorem ipsum</p>";


/* Resultado en el DOM

<div id="contenedor">
    <h2>Hola mundo!</h2>
    <p>Lorem ipsum</p>
</div>

*/

//Con la propiedad "className" podemos definir el atributo class del elemento.

container.className = "contarinerRow"

/* Resultado en el DOM 

<div className:"containerRow">
    <h2>Hola mundo!</h2>
</div>

*/

//Con el método ".createElement()" se pueden crear elementos, en donde el parámetro es el nombre de la etiqueta HTML.
//Y luego con el método ".append()" se agregar al nodo del documento actual.

let parrafo2 = document.createElement("p");
parrafo2.innerHTML = "<h2/>!Hola Coder!</h2>";
document.body.append(parrafo2);

//Con el método ".remove()" podemos eliminar un nodo.

parrafo.remove();
paises[0].remove();

//Con la propiedad ".value" podemos obtener o modificar datos de un formulario

document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value = "39";

//Ejemplo Creando opciones desde un Array

let padre = document.getElementById("personas");
let personas = ["HOMERO","MARGE","BART","LISA","MAGGIE"];

for (const persona of personas) {
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
}

//Plantillas Literales e innerHTML

let productos = [{id: 1, nombre: "Arroz", precio:125},
    { id: 2, nombre: "Fideo", precio:70},
    { id: 3, nombre: "Pan", precio:50},
    { id: 4, nombre: "Flan", precio:100}
];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = 
        `<h3> ID: ${producto.id}</h3>
        <p> Producto: ${producto.nombre}
        <b> $ ${producto.precio} </b>`;
    document.body.appendChild(contenedor);
}

//Con el método ".querySelector()" podemos seleccionar nodos con la sintaxis que utilizamos en los selectores en CSS.

//Siguiendo sintaxis de CSS
parrafo = document.querySelector("#contenedor1 p");
// Por ID con "#"
let contenedor = document.querySelector("#contenedor");
// Por clase con "."
parrafo = document.querySelector(".texto")

//También aplica a pseudoclases de CSS, siendo así más preciso

let radioChecked = document.querySelector(".radio:checked");

//El método ".querySelectorAll()" sirve para obtener un colección de elementos bajo un criterio estipulado.

radioChecked = document.querySelectorAll(".radio:checked")