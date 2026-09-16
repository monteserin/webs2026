function nand(isFuerte, isRapido) {
  return !(isFuerte && isRapido);
}

const v = nand(true, true);
console.log(v);
