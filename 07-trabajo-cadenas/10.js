const devuelveMasLarga2 = (text1, text2, text3) => {
  if (text1.length > text2.length && text1.length > text3.length) {
    return text1;
  } else if (text2.length > text1.length && text2.length > text3.length) {
    return text2;
  } else if (text3.length > text1.length && text3.length > text2.length) {
    return text3;
  } else {
    return "No hay una única cadena más larga";
  }
};

const v = devuelveMasLarga2("aaaaaa", "bbbb", "cccccc");

console.log(v);
