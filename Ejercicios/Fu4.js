let notas = [];

function promedio() {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

function Pasa(P) {
    if (P < 3.0) {
        return "Reprobo";
    }
    else if (P >= 3.0 && P <= 3.9) {
        return "Aprobo";
    }
    else if (P >= 4.0 && P <= 5.0) {
        return "Excelente";
    }
}
