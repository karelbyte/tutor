
function convertir(texto) {
    let resultado = "";
    let encontradoPunto = false;
  
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === ".") {
        encontradoPunto = true;
        resultado += ".";
      } else {
        resultado += encontradoPunto ? texto[i].toLowerCase() : texto[i].toUpperCase();
      }
    }
  
    return resultado;
  }
  
  const textoOriginal = "www.techacademy.com";
  
  console.log("Texto original:", textoOriginal);
  
  const textoConvertido = convertir(textoOriginal);
  
  console.log("Texto convertido:", textoConvertido);
  