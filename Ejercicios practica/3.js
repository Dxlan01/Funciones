function encontrar (numeros){
    let cont=0;
    for (let i=0; i<10; i++){
        let ultim=numeros[i]%10;
        if(ultim==3){
            cont++;
        }
    }
    return(cont);
}