const addGuiones = (text) => {
  let textoFinal = "";
  for (let i = 0; i < text.length; i++) {
    const letra = text[i];
    textoFinal = textoFinal + letra + "-";
  }
  return textoFinal;
};

const v = addGuiones("amor");
console.log(v);
