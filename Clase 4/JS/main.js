do {
    let nombre = prompt("Ingrese su nombre completo.");
    let añoNatal = prompt("Ingrese su año de nacimiento.");
    let generacion;
if (añoNatal<1900) {
    generacion = "noGen"
}else if (añoNatal>=1900&&añoNatal<=1914) {
    generacion = "Interbellum";
}else if (añoNatal>=1915&&añoNatal<=1925) {
    generacion = "Grandiosa"
}else if (añoNatal>=1926&&añoNatal<=1945) {
    generacion = "Silenciosa"
}else if (añoNatal>=1946&&añoNatal<=1964) {
    generacion = "de Baby Boomers"
}else if (añoNatal>=1965&&añoNatal<=1981) {
    generacion = "X"
}else if (añoNatal>=1982&&añoNatal<=1999) {
    generacion = "Y o generación de Millenials"
}else if (añoNatal>=2000&&añoNatal<=2015) {
    generacion = "Z o generación de Centenials"
}else if (añoNatal>=2016) {
    generacion = "Alfa"
}
if (generacion === "noGen") {
    alert("Nombre completo: " + nombre + "\nAño de nacimiento: " + añoNatal + "\n🤔Lo sentimos, no tenemos datos de estas generaciones🤔");
}else if (generacion != "noGen") {
    alert("Nombre completo: " + nombre + "\nAño de nacimiento: " + añoNatal + "\nEsta persona pertenece a la generación " + generacion);
}

reintentar = confirm("¿Quiere conocer la generación de alguien más?");

}while (reintentar != false);

alert("Gracias por utilizar nuestra base de datos ☺")
