//Direcciones de cada persona

const direcciones = {
    elenaYOscar : "España 650 - Gral Gutierrez, Mendoza, Argentina",
    kevin : "Santa Ana 72 - Gral Gutierrez, Mendoza, Argentina",
    marcosYFlorencia : "Indefinido - Rivadavia, Mendoza, Argentina",
    rocioYAngelo : "Indefinido - Río Mayo, Chubut, Argentina",
    gastonYJennifer: "Indefinido - Jesús, Valencia, España",
}

//Declaración de clases (aloja varios datos que se pueden modificar colocando parámetros [constructor (parámetros)])
//Se declara una nueva funcion de esta manera:
/* const direcciones = new familia (); */

/*     class familia{
        constructor() {
            this.elenaYOscar = "España 650 - Gral Gutierrez, Mendoza, Argentina";
            this.kevin = "Santa Ana 72 - Gral Gutierrez, Mendoza, Argentina";
            this.marcosYFlorencia = "Indefinido - Rivadavia, Mendoza, Argentina";
            this.rocioYAngelo = "Indefinido - Río Mayo, Chubut, Argentina";
            this.gastonYJennifer = "Indefinido - Jesús, Valencia, España";
        } */

                //Declaracion de metodos (reacciona como una funcion). Se llama al método de esta manera: 
                /* direcciones.mayuscula(); */

/*         mayuscula() {
            entrada.toUpperCase();
        }
    } */

do {
    entrada = prompt("¿Qué dirección deseas conocer? Escribe ''TERMINAR'' para salir");
    function noDatos () {
        nombre = entrada.toLowerCase();
        nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        alert("No tenemos datos sobre la dirección de " + nombre + ".");
    }
    function direccionesF (inquilino) {
        alert(inquilino)
    }
    entrada = entrada.trim().toUpperCase();
    switch(entrada) {
        case "ELENA" :
            direccionesF(direcciones.elenaYOscar);
            break;
        case "OSCAR" :
            direccionesF(direcciones.elenaYOscar);
            break;
        case "KEVIN":
            direccionesF(direcciones.kevin);
            break;
        case "MARCOS":
            direccionesF(direcciones.marcosYFlorencia);
            break;
        case "FLORENCIA":
            direccionesF(direcciones.marcosYFlorencia);
            break;
        case "ROCIO":
            direccionesF(direcciones.rocioYAngelo);
            break;
        case "ANGELO":
            direccionesF(direcciones.rocioYAngelo);
            break;
        case "GASTON":
            direccionesF(direcciones.gastonYJennifer);
            break;
        case "JENNIFER":
            direccionesF(direcciones.gastonYJennifer);
            break;
        case "TERMINAR":
            break;
        default :
            noDatos();
            break;
    }
}while (entrada != "TERMINAR");

alert("Gracias por utilizar nuestra base de datos ☺")