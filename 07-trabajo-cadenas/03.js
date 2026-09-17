const devuelveUltimaLetra = (text) => text.slice(-1);
const devuelveUltimaLetra2 = (text) => text.substring(text.length - 1);
const devuelveUltimaLetra3 = (text) =>
  text.substring(text.length - 1, text.length);

const v = devuelveUltimaLetra3("amor");
console.log(v);
