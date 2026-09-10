function calcularIMC(peso, estatura) {
    return peso / (estatura * estatura);
}

function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30) {
        return "Obesidad";
    }
}
