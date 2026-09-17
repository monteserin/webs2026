const generarNombre3 = (text1, text2, text3) => {
  if (text1.length < 5 || text2.length < 5 || text3.length < 5) {
    return "error";
  } else {
    return text1.slice(-3) + text2.slice(-3) + text3.slice(-3);
  }
};

const v = generarNombre3("amore", "amorcillo", "amorcito");
console.log(v);
