function comision(venta) {
    if(venta<1000000){
        return com3(venta);
    }
    else if(venta>=1000000 && venta<=2999999){
        return com5(venta);
    }
    else if(venta>=3000000 && venta<=4999999){
        return com7(venta);
    }
    else if(venta>5000000){
        return com10(venta);
    }
    else{
        return "Operacion no valida";
    }
}
function com3(venta){
    return venta/100*3;
}
function com5(venta) {
    return venta/100*5;
}
function com7(venta) {
    return venta/100*7;
}
function com10(venta) {
    return venta/100*10;
}