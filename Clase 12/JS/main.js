//Sugar sintaxis se le llama a los operadores avanzados que funcionan como simplificaciones de tareas complejas.

//Operador ++ : Aumenta el valor de la variable en 1.

let num = 10
//Aumentar en 1 el valor
num = num + 1
//Priemra simplificación
num += 1
//O bien
num++

//Operador ternario : Simplificación de la estructura if...else.
//Tiene la siguiente sintaxis "Condicion ? caso1 : caso2"

let temperatura = 31 ;

temperatura > 30 ? console.log("Día caluroso"):console.log("Día frio") ;

//Operador lógico AND : Simplificación de un condicional, aplica sólo si la condición es verdadera.

const carrito = [];

/* Sin operador AND */
if (carrito.length === 0) {
    console.log("El carrito está vacío!");
}
//Con operador AND
carrito.length === 0 && console.log(("El carrito està vacìo!"));

/* Operador lògico OR : Consta de dos operandos: operando1 || operando2.
Si no es falsy (distinto de 0, null, undefined, NaN, false o string vacío),
el operador OR retorna Operador 1, de los contrario, retorna operador 2 */

//Tabla de evaluación de valores falsy
console.log( 0 || "Falsy" ); //Falsy
console.log( 40 || "Falsy" ); //40
console.log( null || "Falsy" ); //Falsy
console.log( undefined || "Falsy" ); //Falsy
console.log( "Hola Mundo" || "Falsy" ); //Hola Mundo
console.log( "" || "Falsy" );// Falsy
console.log( NaN || "Falsy" );// Falsy
console.log( true || "Falsy" );// true
console.log( false || "Falsy" );// Falsys

//Es versátil para condicionar asignaciones de variables o parámetros
const usuario1 = {
    nombre1: "John Doe",
    edad1: 14
}
const usuario2 = null

function datos (objeto) {
    return "Nombre: " + objeto.nombre1 + "  Edad: " + objeto.edad1
}
console.log(datos(usuario1) || "El usuario no existe"); //{nombre:'John Doe', edad: 14 }
console.log(usuario2 || "El usuario no existe"); //El usuario no existe

//Por ej, para recuperar el últomo estado de un carrito de compras almacenado en localStorage al iniciar la app podemos hacer esto:

/* 
let carrito1

let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));

if (carritoLocalStorage) {
    carrito1 = carritoLocalStorage
}else{
    carrito1 = [] 
}
*/

//O simplificar el preceso con OR (||).

let carrito1 = JSON.parse(localStorage.getItem(carrito)) || []

//Operador Nullish Coalescing
//Funciona igual que el operador OR (||) pero admite más valores como verdaderos.

//Tabla de evaluación de valores falsy
console.log( 0 ?? "Nullish" ); //0
console.log( 40 ?? "Nullish" ); //40
console.log( null ?? "Nullish" ); //Nullish
console.log( undefined ?? "Nullish" ); //Nullish
console.log( "Hola Mundo" ?? "Nullish" ); //Hola Mundo
console.log( "" ?? "Nullish" );// ""
console.log( NaN ?? "Nullish" );// NaN
console.log( true ?? "Nullish" );// true
console.log( false ?? "Nullish" );// false

/* Si intentamos acceder a un objeto que no existe obtendremos un error, pero si usamos "?" sobre el objeto podemos tener
un mejor control de errores en la ejecución */
const usuario3 = null

// console.log( usuario3.nombre3 || "El usuario no existe" );
//Error:"No se puede leer propiedades de NULL"
console.log(usuario3?.nombre3 || "El usuario no existe");
//"El usuario no existe"

//También podemos aplicarlo sobre propiedades que a su vez sean objetos para evaluar su existencia/validez.

const usuario4 = {
nombre4:"John Dae",
edad4: 22,
cursos4: {
    javascript: "aprobado"
}
}

console.log(usuario4?.cursos?.javascript || "La propiedad no existe");
//"aprobado"
console.log(usuario4?.trabajos?.codehouse || "La propiedad non existe");
//"La propiedad no existe"


//Desestructuración
//Podemos crear variables donde se almacenen las propiedades con el mismo nombre del objeto que referncuamos a la derecha

const usuario5= {
    nombre5: "John Doe",
    edad5: 32
}

let {nombre5, edad5} = usuario5

console.log(nombre5);
console.log(edad5);

//Si intentamos desestructurar un propiedad inexistente en el objeto obtendremos undefined.
//const {telefono} = usuario5 //undefined

//Si queremos desestructurar una propiedad que a su vez es objeto es posible de la siguiente manera

const usuario6 = {
    nombre6:"John Doe",
    edad6:"32",
    telefono6: {
        telCel6: 113334444,
        telCasa6:null,
        TelTrabajo6:113325555
    }
}

const {nombre6, telefono6:{TelTrabajo6}} = usuario6

/* A vece los nombres de las propiedades son muy descriptivos para el uso que queremos darle, por ello podemos desestructurarlas
con un alias, es decir la variable con un nombre alternativo tras haber desestructurado el objeto */

const item = {
    item_id: 432,
    product_name:"Some product",
    price_per_unit: 5600
}

const {
    item_id: id,
    product_name: nombre,
    price_per_unit: precio
} = item

console.log(id);
console.log(nombre);
console.log(precio);

//Desestructuración en parámetros

const producto =  {
    id: 10,
    nombre: "Curso Javascript",
    precio: 12500
}

const desestructurar = (item) => {
    //Desestructurando dentro del bloque
    const {id, nombre} = item
    console.log(id, nombre);
}

desestructurar (producto) //10 Curso Javascript

//Otro ejemplo es este, en el cual capturamos la posición x e y al momento de clickear.
//Estos nos será útil al trabajar con objeto grande en lo los que sólo necesitemos unas pocas propiedades del mismo.

window.addEventListener('click',({x,y}) => {
    console.log(x,y);
})

//Desestructuración de arrays
//La diferencia con la desestructuración de objetos es que la de arrays es posicional. 
const nombres = ["Juan","Julieta","Carlos","Mariela"]

const [primerNombre, segundoNombre] = nombres

console.log(primerNombre); //"Juan"
console.log(segundoNombre); //"Julieta"

/* Si queremos acceder a otras posiciones, o mejor dicho omitir las primera
podemos hacerlo dejando espacios vacíos con comas: */

const [ , , a, b] = nombres

console.log(a);
console.log(b);