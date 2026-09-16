function calcularSubtotal(precio, cantidad) {
    let total = cantidad * precio;
    return total;
}

function calcularDescuento(precio, cantidad) {
    let total = cantidad * precio;
    if (cantidad >= 1 && cantidad <= 4) {
        return 0;
    }
    else if (cantidad >= 5 && cantidad <= 9) {
        let desc = total * 5 / 100;
        return desc;
    }
    else if (cantidad >= 10 && cantidad <= 19) {
        let desc = total * 10 / 100;
        return desc;
    }
    else if (cantidad >= 20) {
        let desc = total * 15 / 100;
        return desc;
    }
    else {
        return 0;
    }
}


function calcularTotal(precio, cantidad) {
    let total=calcularSubtotal(precio, cantidad)-calcularDescuento(precio, cantidad);
    return total;
}
