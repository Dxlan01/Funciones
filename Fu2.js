function calculo(peso, cag) {
    let tarifa = 0;
    if (peso <= 2) {
        tarifa = 8000;
    }
    else if (peso > 2 && peso <= 5) {
        tarifa = 12000;
    }
    else if (peso > 5 && peso <= 10) {
        tarifa = 18000;
    }
    else if (peso > 10) {
        tarifa = 25000;
    }
    if (cag == 1) {
        let descuento = tarifa * 20 / 100;
        let total = tarifa - descuento;
        return "Tarifa normal: $" + tarifa + "\nDescuento: $" + descuento + "\nTotal envío: $" + total;
    }
    else if (cag == 2) {
        return "Tarifa normal: $" + tarifa + "\nDescuento: $0" + "\nTotal envío: $" + tarifa;
    }
    else {
        return "Categoría inválida";
    }
}