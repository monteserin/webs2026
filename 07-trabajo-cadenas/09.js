const devuelveMasLarga = (text1, text2) => {
  const letras1 = text1.length;
  const letras2 = text2.length;

  if (letras1 >= letras2) {
    return text1;
  } else {
    return text2;
  }
};

const devuelveMasLarga2 = (text1, text2) =>
  text1.length >= text2.length ? text1 : text2;

const v = devuelveMasLarga("odioooooo", "cositas");
console.log(v);
