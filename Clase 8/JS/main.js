//Se puede acceder a algunas constantes matemáticas con el objeto "Math"
console.log(Math.E); //Euler: 2.718281828459045
console.log(Math.PI); //PI: 3.141592653589793

//Metodos del objeto "Math"

/* Los métodos para Math ".min()" y ".max()" reciben argumentos numéricos y 
devuelven el mínimo o máximo correspondientemente */
console.log(Math.max(55, 13, 0, -25, 93, 4)); //93
console.log(Math.min(55, 13, 0, -25, 93, 4)); //-25
//Se puede referenciar los valores infinito e infinito negativo (variables del tipo "number")
console.log(Math.max(55, 13, 0, -25, 93, 4, Infinity)); //Infinity
console.log(Math.max(55, 13, 0, -25, 93, 4, -Infinity)); //-Infinity

//El método ".ceil()" devuelve el número entero mayor o igual más próximo
console.log(Math.ceil(PI));// 4
//El método ".floor()" devuelve el número entero menor o igual más próximo 
console.log(Math.floor(PI));// 3
//El método ".round()" devuelve el número entero más cercano, sea menor, mayor o igual
console.log(Math.round(PI));// 3
//El método ".sqrt()" (De Square Root) retorna la raíz cuadrada del volor introducido (Al ingresar un número negativo devuelve NaN)
console.log(Math.sqrt(9));//3
console.log(Math.sqrt(2));//1.414213562373095
console.log(Math.sqrt(-9));//NaN
//El método ".random()" genera un número aleatorio entre 0 y 1
console.log(Math.random());//0.6609867980868442
console.log(Math.random());//0.09291446900104305
//Para generar números aleatorios dentro de un rango deseado, distinto de 0-1, podemos multiplicar su resultado por el rango esperado
//También podemos sumar el límite inferior si lo necesitamos

//Número entre 0 y 100
console.log(Math.random()*100);
//Número entre 0 y 30
console.log(Math.random()*30);
//Número entre 50 y 100
console.log(Math.random()*30 + 50);

//Se suelen combinar con las funciones de redondeo para obtener números enteros aleatoriamente
function generadorDeNumeros() {
    return Math.round(Math.random()*100)
}
console.log(generadorDeNumeros());

                            /* Clase Date */

//Esta es la clase con la que podemos manipular fechas

console.log(new Date());//Fri Dec 17 2021 11:35:08 GMT-0300 (hora estándar Argentino)

//Los meses se expresan desde 0 (Enero) hasta 11 (Diciembre)
console.log(new Date(2020, 1, 15));//Sat Feb 15 2020 00:00 GMT-0300 (hora estándar Argentina)

//Date tiene un constructor que nos permite crear objetos con fechas diferentes
//Recibe parámetros en el orden año, mes, día, hora, minutos, segundos, milisegundos (Expresado en valores tipo number)
const casiNavidad = new Date (2020, 11, 24, 23, 59, 59)
console.log(casiNavidad);//Sat Dec 24 23:59;59 GMT 0300 (hora estándar Argentina)

//Se pueden obtener valores singulares de la fecha, como por ej:
const hoy = new Date("December 17, 2021")

//".getFullYear()" nos retornará el number que representa el año creado
console.log(hoy.getFullYear()); //2021

//".getmonth()" nos retornará el number que representa al mes
console.log(hoy.getMonth()); //11 (diciembre)

//".getDay()" nos retornará el number que representa el día creado (1 = Lunes, 7 = Domingo)
console.log(hoy.getDay()); // 5 (viernes)


//La clase Date tiene métodos que presentan la fecha en formato de tipo String:

console.log(hoy.toDateString());//Fri Dec 17 2021
console.log(hoy.toLocaleString());// 17/12/2021 00:00
console.log(hoy.toLocaleDateString());//17/12/2021
console.log(hoy.toTimeString());// 00:00:00 GMT-0300 (hora estándar Argentina)


/* Podemos calcular diferencias de fechas, retornando un valor en milisegundos, para saber diferencia entre días,
meses u años se deben hace sus respectívos cálculos */

const navidad = new Date("December 25,2021");

console.log(navidad - hoy); //691200000

const milisegundosPordia = 86400000

console.log((navidad - hoy) / milisegundosPordia); //8
