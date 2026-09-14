// 1. Imprimir los números del 1 al 10
// 2. Además de los numeros que imprimimos en el paso anterior, añadimos el operador: 1x7= , 2x7=, 3x7=, 4x7=
// 3. Añadimos los resultados: 1x7=7 , 2x7=14, 3x7=21, 4x7=28
// 4. Envolver el bucle for actual con otro bucle que usará la variable contadora j.
// 5. Usar j en sustitución del 7
for (let j = 1; j <= 10; j++) {
  for (let i = 1; i <= 10; i++) {
    const multiplicacion = i * j;
    console.log(i + "x" + j + "=" + multiplicacion);
  }
}
