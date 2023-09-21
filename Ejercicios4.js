
//Crea una función que verifique 
//si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).


 export const isPangrama = (word) => {
    const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    word = word.toLowerCase();
   
    for (let i = 0 ; i< lowerCaseAlphabet.length; i++) {
        let currentLetter = lowerCaseAlphabet[i];
        //en caso de que no tenga todas las letras volvemos 
        if (!word.includes(currentLetter)) {
            return false;
        }
        
    }
return true;
};

//Escribe una función que compruebe si una cadena de texto contiene todas las vocales.



