function nor(isFuerte, isRapido) {
  return !isFuerte && !isRapido;
}

const v1 = nor(false, false);
console.log(v1);
