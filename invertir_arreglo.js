function invertirArreglo(arreglo) {
  const arregloInvertido = arreglo.reverse();
  return arregloInvertido;
}

const arregloOriginal = [23, 5, 34, 56, 98, "cadena", 7];

console.log("Arreglo original:", arregloOriginal);

const arregloInvertido = invertirArreglo(arregloOriginal);

console.log("Arreglo invertido:", arregloInvertido);
