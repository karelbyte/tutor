for (let i = 1; i <= 5; i++) {
  let numeroGenerado = Math.floor(Math.random() * 100);
  
  if (numeroGenerado % 2 === 0) {
    console.log(`Iteración ${i}: ${numeroGenerado} // El número es par`);
  } else {
    console.log(`Iteración ${i}: ${numeroGenerado} // El número es impar`);
  }
}