//Spreads

//Spread de arrays
const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

/* Si pasamos un array como parámetro a una función recibirá lo siguiente*/
console.log(nombres); //["Juan", "Julieta", "Carlos", "Mariela"]

/* Si pasamos un spread del array (...array), en cambio, recibirá: */
console.log(...nombres); //Juan Julieta Carlos Mariela
//Lo que es lo mismo que:
console.log("Juan", "Julieta", "Carlos", "Mariela");
//Esto significa que al enviar un spread de un array se enviarán todos sus elementos como parámetros individuales.
/* Esto es útil cuando tenemos datos ordenados dentro de una colección pero trabajamos funciones que no reciben arrays
sino parámetros individuales como Math.max() o Math.min() */

const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

console.log(Math.max(numeros));// NaN
console.log(Math.max(...numeros));// 92

//También podemos hacer un spread de un array dentro de una estructura que lo admitan
/* Si lo hacemos dentro de un obj veremos que cada propiedad toma como nombre el índice de los elementos. */

const nombre1 = ["Juan","Julieta"];
const nombre2 = ["Carlos", "Mariela"];
//Spread de los dos array dentro de uno
const nombre = [...nombre1 , ...nombre2]

console.log(nombre); // ["Juan", "Julieta", "Carlos", "Mariela"]

//Spread del array en un objeto

const nombreObj = {...nombre}
console.log(nombreObj); //{'0': 'Juan', '1': 'Julieta', '2': 'Carlos', '3': 'Mariela'}

//Podemos aplicar un spread de objeto también, pero sólo dentro de una estructura que lo permita, como otro objeto.
//Esto puede ser útil cuando queremos replicar o modificar estructuras de objetos.

const usuario1 = {
    nombre: "Juan",
    edad: 24,
    curso: "JavaScript"
}

const usuario2 = {
    ...usuario1
}

console.log(usuario2); //{nombre:'Juan', edad: 24, curso:'JavaScript'}

const usuario3 = {
    ...usuario1,
    curso: "React JS",
    email: "juan@doe.com"
}

console.log(usuario3); //{nombre:'Juan', edad: 24, curso:'React JS', email: 'juan@doe.com'}


//Rest parameters

/* El operador spread también puede utilizarse dentro de la declaración de una función para indicar que queremos 
recibir una cantidad indeterminada de parámetros. Por ej: */

function imprimir (...numeros){
    console.log(numeros);
}
//Los parámetros recibidos serán agrupados en un array.
imprimir(2,4);// [2, 4]
imprimir(6,10,25,32)// [6, 10, 25, 32]

function sumar (...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}

console.log (sumar(2,4));// 6
console.log (sumar(6,10,25,32));// 73