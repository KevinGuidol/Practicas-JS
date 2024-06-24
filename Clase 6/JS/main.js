//Declaración de arrays (los elementos del mismo se colocan entre corchetes '[]'):
//Las posiciones de los elementos de un array se cuenta desde '0' (En este caso el elemento 0 sería '1')

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

// los métodos '.unshift()' y '.push'() sirven para agregar elementos al inicio y al final del array respectivamente.
// El elemento a agregar se debe escribir entre los paréntesis '()'.

numeros.push("Soy un 9");
numeros.unshift("Soy un 0");

for (let i = 0; i< numeros.length; i++) {
console.log(numeros[i]);
}
// los métodos '.shift()' y '.pop()' sirven para eliminar elementos al inicio y al final del array respectivamente.
numeros.shift();
numeros.shift();

numeros.pop();
numeros.pop();

console.log (numeros); //⇒ 2, 3, 4, 5, 6, 7

numeros.push(8);
numeros.unshift(1);

// El método '.splice()' sirve para eliminar uno o varios elementos desde una posición seleccionada en adelante.
//Los elementros se determinan por dos parámetros:
// El 1ro es la posición del primer elemento y el 2do la cantidad de elementos que se quieren eliminar desde esa posición.

numeros.splice(2,3); // Se eliminaron los números 3, 4 y 5

//Con el método '.join' generamos un string con los elementos del array, separados por el valor que demos en el parámetro.

console.log(numeros.join("//"));

//Con el método '.concat' combinamos los elementos de 2 arrays en un único array

const letras = ["A", "B", "C", "D", "E"]
const caracteres = numeros.concat(letras)//⇒ 1, 2, 7, 8, A, B, C, D, E

console.log(caracteres.join("-"));

//El método '.slice()' crea una copia de una parte del array que seleccionemos en otro array, sin modificar el original.
//Los elementos se determinan con un 1er parámetro que indica el inicio del nuevo array y un 2do parámetor que indica el fin (No agrega el elemento del fin).

const caracteresCopia = caracteres.slice(3,7); //⇒ 7, 8, A, B

console.log(caracteresCopia.join("//"));

//El método '.indexOf()' devuelve el índice de un elemento del array proporcionandole un parámetro.
//En caso de no existir el elemento indicado, nos devolverá el valor '-1'.

const nombres = ["Marcos", "Gastón", "Rocío", "Kevin"]

console.log(nombres.indexOf("Rocío")); //⇒ 2
console.log(nombres.indexOf("Elena")); //⇒ -1

//El método '.includes()' funciona de la misma manera que '.indexOf()' con la diferencia de que devuelve un valor booleano.

console.log(nombres.includes("Gastón")); //⇒ True
console.log(nombres.includes("Elena")); //⇒ False

//El método '.reverse()' invierte el orden de los elementos dentro de un array (SE MODIFICA EL ARRAY ORIGINAL).

letras.reverse(); //⇒ E, D, C, B, A
console.log(letras.join("\n")); //Se puede introducir un salto de línea dentro del método '.join'

                                            //Ejemplo aplicado de como eliminar cualquier nombre que se introduzca.

// Recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // Busco su índice en el array
    let index = nombres.indexOf(nombre)

     // Si existe, o sea es distinto a -1, lo borro con 'splice()'
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}

eliminar("Kevin")

console.log(nombres.join("\n")); //⇒ Marcos, Gastón, Rocío

//Los array se pueden utilizar para almacenar objetos personalizados.
//Podemos agregar nuevos objetos con el método '.push()' más el constructor al que pertenece el objeto.

const objeto1 = { id: 1, producto: "Arroz"}; //⇒ 1er manera de agregar un objeto
const array1 = [objeto1, {id: 2, producto: "Fideo"}]; //⇒ 2da manera de agregar un objeto

array1.push({id: 3, producto: "Leche"}); //⇒ 3er manera de agregar un objeto

console.log(array1);

// La sentencia 'for...of' nos posibilita recorrer un array ejecutando un bloque de código por cada elemento del objeto.

for (const producto of array1) {
console.log(producto.id + ". " + producto.producto); //⇒ 1. Arroz, 2. Fideo, 3. Leche
}

                                            //Ejemplo aplicado de Objetos, métodos y array.

/* class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
} */
//Declaramos un array de productos para almacenar objetos
/* const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50")); */
//Iteramos el array con for...of para modificarlos a todos
/* for (const producto of productos)
    producto.sumaIva(); */