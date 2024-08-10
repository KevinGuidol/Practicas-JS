//Librerías en JS

//Se pueden incorporar al proyecto de dos maneras con la etiqueta "<script>" en el archivo HTML.

//Descargando los archivos y llamandolos:

/* <script src="JS/libreria.js" */

//También  se puede hacer a través de un CDN

/* <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" */

/* Una práctica comunmente usada es la de cargarlas en formato minificado, o minified. El formato minified son 
archivos JS en la que todo se encuentra escrito en una única línea y sin espacios para reducir tamaño del archivo */

//Hay que tener en cuenta la documentación, que es el manual de instrucciones para la implementación y manejo de las librerías

/* Sweet Alert:

Permite crear alertas personalizadas atractivas, sencillas, customizables e interactivas, 
reemplazando las "alert()" convencionales. */

//Ahora, podemos disparar alertas a través del método ".fire" del objeto global Swal:

const btn = document.querySelector('#myBtn');
btn.addEventListener('click', () => {
    console.log('Clickeaste el botón');
    Swal.fire({
        title: 'Genial!',
        text: 'Clickeaste el botón',
        icon: 'success', //Tipos de alertas: "success","error","warning","info","question"
        confirmButtonText: 'Cool'
    })
})
//Se puede modificar el aspecto con lenguaje CSS y hasta agregar imágenes dentro de la alerta.

//Luego del primer ".fire()" es posible concatenar un método ".then()" siguiento la siguiente sintaxis:

const btn2 = document.querySelector('#myBtn2');
btn2.addEventListener('click', () => {

    Swal.fire({
        title: 'Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {

        if (result.isConfirmed) {
            console.log('Eliminaste el archivo');
            
            Swal.fire({
                title:'Borrado!',
                icon:'success',
                text: 'El archivo fue eliminado'
            })
        }else{
            console.log('NO eliminaste el archivo');
            
            Swal.fire({
                title:'Entendido!',
                icon:'info',
                text:'El archivo NO ha sido eliminado'
            })
        }
    })
})
//Podemos obtener más info sobre Sweet alert desde "https://sweetalert2.github.io/"

/* Toastify:

Nos permite mostrar mensajes de notificación personalizados.*/

const btn3 = document.querySelector('#myBtn3');
btn3.addEventListener('click', () => {
    console.log('Clickeaste la notificación');
    
    Toastify({
        text: "Click para ir a Youtube",
        duration: 3000,
        newWindow:true,
        gravity: 'bottom',
        position: 'right',
        //También podemos estilar nuestro toast desde CSS con la propiedad className
        className: 'info',
        //Con la propiedad "destination" podemos redirigir al usuario a alguna otra página.
        destination: 'https://www.youtube.com'
    }).showToast();
})
//Podemos obtener más info sobre Toastify desde "https://github.com/apvarun/toastify-js/blob/master/README.md"


/* Luxon:


Nos permite trabajas con fechas y horas de una manera sencilla. Podremos formatear, parsear, sumar y restar
fechas entre otras funciones*/

/* La clase principal de luxon es DateTime, para ser más eficientes y ordenador podremos referenciarla como
una variable global*/

const DateTime = luxon.DateTime

/* Un "DateTime" Representa un miliseg específico junto con una zona horaria. Podemos crear un DateTime
con el método ".local()", que recibe argumentos desde el año hasta los miliseg */

const dt = DateTime.local(2022, 1, 25, 12, 10); //25/01//2022 - 12:10hs

/* Podemos crear un objeto con la fecha actual con "DateTime.now()",
que es el equivalente a hacer ".local()" sin argumentos  */

/* Podemos crear fechas a través de un objeto, con el método ".fromObject", indicando las siguientes
propiedades y valores. Donde en el primer objeto definimos la fecha y hora numérica 
y en el segundo aclaramos la zona horaria y tipo de numeración */
const dt1 = DateTime.fromObject(
    { year:2024, day: 22, hour: 12, month:2},
    {zone: 'America/Buenos_Aires', numberingSystem:'beng'}
)
console.log(dt1.toString());

//También podemos crear fechas a partir de un string siguiendo la norma ISO, con el método ".fromISO()"

DateTime.fromISO("2017-05-15");         //=> May 15, 2017 at midnight
DateTime.fromISO("2017-05-15T08:30:00") //=> May 15, 2017 at 8:30

//¿Cómo accedemos a las fechas?
/* Mediante "console.log()" no obtendremos una presentación clara o útil de las fechas creadas
Para recuperar la fecha como string aplicaremos el método ".toString()" */

const now = DateTime.now();
console.log(now.toString());

//Es posible acceder a distintos compenentes de la fecha creada a través de propiedades específicas.

console.log(now.year);//=> 2024
console.log(now.month);//=> 8
console.log(now.day);//=> 10
console.log(now.second);//=> 25
console.log(now.weekday);//=> 6(sábado)

//Hay otros accesos posibles y útiles, como por ejemplo:

console.log(now.zoneName); //=> America/Buenos_Aires
console.log(now.daysInMonth); //=> 31
//La totalidad de ellos se pueden ver en la documentación de Luxon.

//Podremos formatear la fecha mediante el método ".toLocaleString()", como por ej:

console.log(now.toLocaleString(DateTime.DATE_SHORT)); //=> 10/8/2024
console.log(now.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)); //=> sáb, 10 ago 2024
console.log(now.toLocaleString(DateTime.DATE_HUGE)); //=> sábado, 10 de agosto de 2024
console.log(now.setLocale('en').toLocaleString(DateTime.DATE_HUGE)); //=> Saturday, August 10, 2024

//Podemos acceder al listado completo de presets en:  https://moment.github.io/luxon/#/formatting?id=presets


//Con los métodos ".plus()" y ".minus()" podemos obtener cálculos sobre las fechas de forma sencilla.
//La manera de hacerlo es introduciendo un objeto con la cantidad de días, meses, horas, etc. que queramos calcular.

const suma = now.plus({hours: 5, minutes: 15})
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT)); //=> 10/8/2024, 23:17

const resta = now.minus({hours: 5, minutes: 15})
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT)); //=> 10/8/2024, 12:47

//Es posible crear nuevas instancias reemplazando propiedades específicas:

console.log(now.set({hour: 3}).hour) //=> 3

/* La clase Duration representa una cantidad de tiempo. Se cre a través del método ".fromObject()" 
enviando un objeto con las características deseadas, es posible sumarlo o restarlo de un objeto DateTime. */

const Duration = luxon.Duration

const dur = Duration.fromObject({hours: 3, minutes:15});

console.log(dur.hours); //=> 3
console.log(dur.minutes); //=> 15
console.log(dur.seconds); //=> 0

console.log(now.toLocaleString(DateTime.DATETIME_SHORT));//=> 10/8/2024, 18:22

const suma1 = now.plus(dur);
console.log(suma1.toLocaleString(DateTime.DATETIME_SHORT));//=> 10/8/2024, 21:37

const resta1 = now.minus(dur);
console.log(resta1.toLocaleString(DateTime.DATETIME_SHORT));//=> 10/8/2024, 15:07

/* De forma similar podemos trabajar con la clase interval, que con su constructor podemos enviar 
dos fechas y nos devuelve el intervalo entre ellas */

const Interval = luxon.Interval
const later = DateTime.local(2024, 12, 25);
const i = Interval.fromDateTimes(now, later);

console.log(i.length('days'));//=> 136.2175036574074
console.log(i.length('hours'));//=> 3269.2200877777777
console.log(i.length('minutes'));//=> 196153.20526666666

const diasFaltantes = Math.floor(i.length('days'))
const horasFaltantes = Math.floor(i.length('hours'))
const minutosFaltantes = Math.floor(i.length('minutes'))

const tiempoFaltante = {
    days: diasFaltantes,
    hours: horasFaltantes,
    minutes: minutosFaltantes
}
//De esta manera podremos expresar lo siguiente:

console.log(`Faltan ${tiempoFaltante.days} días, ${tiempoFaltante.hours-(tiempoFaltante.days*24)} horas y ${tiempoFaltante.minutes-(tiempoFaltante.hours*60)} minutos para navidad`)
//Faltan 136 días, 4 horas y 51 minutos para navidad