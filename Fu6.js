let numeros = [];
let positivos = 0;
let negativos = 0;
let ceros = 0;
let sumaPositivos = 0;
let sumaNegativos = 0;

function analizarNumeros() {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos++;
            sumaPositivos += numeros[i];
        } else if (numeros[i] < 0) {
            negativos++;
            sumaNegativos += numeros[i];
        } else {
            ceros++;
        }
    }
}
