const direcciones = {
    elenaYOscar : "España 650 - Gral Gutierrez, Mendoza, Argentina",
    kevin : "Santa Ana 72 - Gral Gutierrez, Mendoza, Argentina",
    marcosYFlorencia : "Indefinido - Rivadavia, Mendoza, Argentina",
    rocioYAngelo : "Indefinido - Río Mayo, Chubut, Argentina",
    gastonYJennifer: "Indefinido - Jesús, Valencia, España",
}

do {
    entrada = prompt("¿Qué dirección deseas conocer? Escribe ''TERMINAR'' para salir");
    function noDatos () {
        entrada = entrada.toLowerCase();
        entrada = entrada.charAt(0).toUpperCase() + entrada.slice(1);
        alert("No tenemos datos sobre la dirección de " + entrada + ".");
    }
    function direccionesF (nombre) {
        alert(nombre)
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