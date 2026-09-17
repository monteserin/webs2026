const generarNombre2 = (text1, text2, text3) => {
  if (text1.length < 5 || text2.length < 5 || text3.length < 5) {
    return "error";
  } else {
    return text1.slice(-1) + text2.slice(-1) + text3.slice(-1);
  }
};
const generarNombre22 = (text1, text2, text3) =>
  text1.length < 5 || text2.length < 5 || text3.length < 5
    ? "error"
    : text1.slice(-1) + text2.slice(-1) + text3.slice(-1);

const v = generarNombre22("amore", "amorcillo", "amorcito");
console.log(v);
