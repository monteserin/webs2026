// Define una función llamada `contadorDeLetras2` que compara dos textos y una letra
// para determinar cuál de los dos textos tiene más ocurrencias de esa letra.
const contadorDeLetras2 = (text1, text2, letra) => {
  // Llama a la función `cuentaLetras` para contar las ocurrencias de `letra` en `text1`.
  const c1 = cuentaLetras(text1, letra); // Ejemplo: "amaral", "a" -> c1 = 3
  // Llama a la función `cuentaLetras` para contar las ocurrencias de `letra` en `text2`.
  const c2 = cuentaLetras(text2, letra); // Ejemplo: "casaa", "a" -> c2 = 3
  // Devuelve el texto que tiene más ocurrencias de la letra.
  // Si ambos tienen la misma cantidad, devuelve `text1` (por el operador `>`).
  return c1 > c2 ? text1 : text2;
};

// Define una función llamada `cuentaLetras` que cuenta cuántas veces aparece
// una letra específica en un texto dado.
const cuentaLetras = (text, letra) => {
  // Inicializa un contador para llevar la cuenta de las ocurrencias de la letra.
  let contadorLetras = 0;
  // Recorre cada carácter del texto.
  for (let i = 0; i < text.length; i++) {
    const letraIteracion = text[i]; // Obtiene el carácter actual.
    console.log(letraIteracion); // Muestra el carácter actual en la consola (para depuración).
    // Compara el carácter actual con la letra buscada, ignorando mayúsculas/minúsculas.
    if (letraIteracion.toUpperCase() === letra.toUpperCase()) {
      contadorLetras++; // Si coinciden, incrementa el contador.
    }
  }
  // Devuelve el número total de ocurrencias de la letra en el texto.
  return contadorLetras;
};

// Llama a la función `contadorDeLetras2` con los textos "amaral" y "casaa",
// y la letra "a". Guarda el resultado en la variable `v`.
const v = contadorDeLetras2("amaral", "casaa", "a");

// Muestra el texto con más ocurrencias de la letra "a" en la consola.
console.log(v); // Resultado esperado: "amaral" o "casaa" (si tienen la misma cantidad, será "amaral").
