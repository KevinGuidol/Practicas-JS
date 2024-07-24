//Localstorage: setItem
/* Los datos alamcenados en localStorage se almacenan de forma indefinida en el navegador(La información persiste ante un
reinicio del navegador y hasta del sistem operativo) */

//Para almacenar información utilizamos setItem:
/* El método es el siguiete -> "localStorage.setItem(clave, valor)"
Siendo:
clave = nombre para identificar el elemento
valor = valor/contenido del elemento*/

localStorage.setItem('bienvenida','Hola programador');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);

//Podemos ver el Storage en el navegador a través del apartado de "application"

// Para accedee a la info almacenada usamos "getItem"

let mensajeBienvenida = localStorage.getItem('bienvenida');
let verdadero = localStorage.getItem('esValido');
let numero = localStorage.getItem('unNumero');

console.log(mensajeBienvenida); //Hola programador
console.log(verdadero); //True
console.log(numero); //20

//sessionStorage:setItem
/* La info almacenada en "sessionStorage" se alamcena en el navegador hasta que se cierre la ventana.
(Sólo existe dentro de la pestaña actual del navegador, otra pestaña de la misma página tendrá otro sessionStorage) */

//Se declara de la misma manera que localStorage

sessionStorage.setItem('objNumeros', [1,2,3]);
sessionStorage.setItem('noEsValido', false);
sessionStorage.setItem('email', 'info@email.com');

//También se accede a la info almacenada en sessionStorage con getItem.

let lista = sessionStorage.getItem('objNumeros').split(",");
let noValido = (sessionStorage.getItem('noEsValido') == 'true');
let email = sessionStorage.getItem('email');

console.log(typeof lista); //Object
console.log(typeof noValido); //boolean
console.log(typeof email);//string

//Ciclo para recorrer las claves almacenadas en el objeto localStorage

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
}

//Para elomonar info almacenada en localStorage o sessionStorage podemos utilizar el método "".removeItem()" o ".clear()".

//Con el método ".removeItem()" se elimina una info específica.
localStorage.removeItem('bienvenida');
sessionStorage.removeItem('noEsValido');
//Con el método ".clear()" se elimina toda la info.
localStorage.clear();
sessionStorage.clear();

/* Al almacenar info de un objeto en un storage, tanto la clave como el valor se almacenan en strings, ante cualquier otro
tipo a guardar como un objeto o un número, se convierte a string automáticamente.Por ej, un objeto se guarda como [object object]*/

//Estos tipos de valores deben ser convertidos a un JSON(una cadena) antes de enviarlo.
//Para transformar un objeto JS a string JSON utilizamos "JSON.stringify()"

const producto1 = {id:2, producto:"Arroz"};
const enJSON = JSON.stringify(producto1);

console.log(enJSON);//{"id":2,"producto":"Arroz"}
console.log(typeof producto1);//Object
console.log(typeof enJSON);//String

localStorage.setItem("producto1", enJSON);//Se guarda {"id":2,"producto":"Arroz"}

//Para transformar un string JSON a objeto JS utilizamos "JSON.parse()"

const enJSON1 = '{"id":2,"producto":"Arroz"}';
const producto2 = JSON.parse(enJSON1);
localStorage.setItem("producto2",enJSON1)

console.log(typeof enJSON1);//string
console.log(typeof producto2);//object
console.log(producto2.producto);//Arroz

const producto3 = JSON.parse(localStorage.getItem("producto2"));
console.log(producto3);

//Ejemplo aplicado: Almacenar array de objetos

const productos = [
    {id:1, producto:"Arroz", precio:125},
    {id:2, producto:"Fideo", precio:70},
    {id:3, producto:"Pan", precio:50},
    {id:4, producto:"Flan", precio:100},
]
// Atajo para guardar info
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
//O almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

console.log(
    JSON.parse(localStorage.getItem("listaProductos")).map(
    producto => `ID:${producto.id}  Producto: ${producto.producto}  $${producto.precio} \n`).join("\n")
);

//Ejemplo aplicado: Recuperar estados precios

let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem('usuario'))

//Si había algo almacenado, lo recupera. Si no, le pido un ingreso
if (usuarioEnLS) {
    usuario = usuarioEnLS
}else {
    usuario = prompt('Ingrese su nombre de usuario')
}

