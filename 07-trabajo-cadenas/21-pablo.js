const contadorDeLetras2 = (text1, text2, letra) => {
  const vecesQueLetraEstaEnText1 = cuentaLetras(text1, letra); // amaral a
  const vecesQueLetraEstaEnText2 = cuentaLetras(text2, letra); // casaa a
  return vecesQueLetraEstaEnText1 > vecesQueLetraEstaEnText2 ? text1 : text2;
};

const cuentaLetras = (text, letra) => {
  let vecesQueLetraEstaEnText = 0;
  // tenemos un bucle para recorrer todos los caracteres de la variable text
  for (let i = 0; i < text.length; i++) {
    const letraSobreLaQueEstoyIterando = text[i];
    // SI la letra sobre la que estamos iterando es igual a la letra que hemos recibido como parámetro, incrementamos el contador de letras
    if (letraSobreLaQueEstoyIterando.toUpperCase() === letra.toUpperCase()) {
      vecesQueLetraEstaEnText++;
    }
  }
  return vecesQueLetraEstaEnText;
};

const v = contadorDeLetras2("amaral", "casaa", "a");
console.log(v);
