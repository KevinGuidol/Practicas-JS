let nombre = prompt("Ingrese su nombre");
let peso = parseFloat(prompt("Ingrese su peso"));
let altura = parseFloat(prompt("Ingrese su altura"));
let alturaCuadrado = altura*altura;
let imc = peso/alturaCuadrado;
let salida = nombre + ", tu IMC es de " + imc.toFixed(2);

if(imc < 18.5) {
    alert(nombre + ", tu IMC es de " + imc + ", tu peso es inferior al recomendado para tu estatura");
}
else if (imc >= 25) {
    alert(nombre + ", tu IMC es de " + imc + ", tu peso es superior al recomendado para tu estatura");
}
else if (imc > 18.5 && imc < 25 ) {
    alert(nombre + ", tu IMC es de " + imc + ", tu peso está dentro del rango recomendado para tu estatura");
}

let dinero = prompt("¿Cuánto dinero tienes?")
let Edad = prompt("¿Cuánto años tienes?")

if (dinero >= 2000 && Edad >= 18) {
    alert ("Te compraste birra");
}
else if(dinero >=4000 && Edad <18) {
    alert("Coimeaste al kiosquero, te compraste una birra")
}
else {
    alert ("No podés comprar cerveza");
}