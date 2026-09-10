function contar(contraseña) {
    if(/\d/.test(contraseña)){
        if(contraseña.length <=6){
            return ("Su contraseña es: "+contraseña+". \nEsta tiene una longitud de: "+contraseña.length+". \nTiene numeros: Si. \nNivel: Debil");
        }
        else if(contraseña.length >6 && contraseña.length<=9){
            return ("Su contraseña es: "+contraseña+". \nEsta tiene una longitud de: "+contraseña.length+". \nTiene numeros: Si. \nNivel: Media");
        }
        else if(contraseña.length >=10){
            return ("Su contraseña es: "+contraseña+". \nEsta tiene una longitud de: "+contraseña.length+". \nTiene numeros: Si. \nNivel: Fuerte");
        }
        else{
            "Invalido";
        }
    }
    if(contraseña.length <=6){
            return ("Su contraseña es: "+contraseña+". \nEsta tiene una longitud de: "+contraseña.length+". \nTiene numeros: Si. \nNivel: Debil")
        }
    else if(contraseña.length >6 && contraseña.length<=9){
        return ("Su contraseña es: "+contraseña+". \nEsta tiene una longitud de: "+contraseña.length+". \nTiene numeros: Si. \nNivel: Media");
        }
    else if(contraseña.length >=10){
            return ("Su contraseña es: "+contraseña+". \nEsta tiene una longitud de: "+contraseña.length+". \nTiene numeros: Si. \nNivel: Fuerte");
        }
}