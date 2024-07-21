let total = 0;

for (let i=1; i<=10; i++){
    total+=i
}

console.log(total);

//Ejemplo de Abstracción

function sumarRango(valorMin,valorMax) {
    let total= 0 ;

    for (let i=valorMin; i<=valorMax; i++){
        total+=i
    }
    
    return total;
}

console.log(sumarRango(5, 10));
