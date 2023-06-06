function contarRepeticiones(cadena, caracter) {
    let contador = 0;
    
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === caracter) {
        contador++;
      }
    }
    
    return contador;
  }
  
  const cadenaTexto = "hola como estas";
  const caracterBuscado = "o";
  
  const repeticiones = contarRepeticiones(cadenaTexto, caracterBuscado);
  
  console.log(`El carácter "${caracterBuscado}" se repite ${repeticiones} veces en "${cadenaTexto}"`);
  