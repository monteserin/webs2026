const contadorDeLetras2 = (text1, text2, letra) => {
  const c1 = cuentaLetras(text1, letra); // amaral a
  const c2 = cuentaLetras(text2, letra); // casaa a
  return c1 > c2 ? text1 : text2;
};

const cuentaLetras = (text, letra) => {
  let contadorLetras = 0;
  // tenemos un bucle para recorrer todos los caracteres de la variable text

  for (let i = 0; i < text.length; i++) {
    // letraIteracion almacena cada una de las letras de la palabra text
    const letraIteracion = text[i];
    console.log(letraIteracion);
    // SI la letra sobre la que estamos iterando es igual a la letra que hemos recibido como parámetro, incrementamos el contador de letras
    if (letraIteracion.toUpperCase() === letra.toUpperCase()) {
      contadorLetras++;
    }
  }
  return contadorLetras;
};

const v = contadorDeLetras2("amaral", "casaa", "a");
console.log(v);
