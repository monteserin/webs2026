const firstChar = (text) => text.trim()[0];
const firstChar2 = (text) => {
  const fueraEspacios = text.trim();
  const primeraLetra = fueraEspacios[0];
  return primeraLetra;
};

const v = firstChar2(" amor");
console.log(v);
