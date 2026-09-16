function dentro(numeros, digito){
    let cont=0;
    for(let i=0; i<10; i++){
        let numero=numeros[i];
        while(numero>0){
            let ultim=(numero%10);
            if(ultim==digito){
            cont++;
        }
        numero=Math.floor(numero/10)
        }
    }
    return(cont);
}