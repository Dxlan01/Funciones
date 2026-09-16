function posicione(posiciones, digito) {
    let cont=0;
    for (i=0; i<10; i++){
        let penultimo=Math.floor(posiciones[i]/10)%10
        if(penultimo==digito){
            cont++;
        }
    }
    return(cont);
}