function testEqual(val) {
  if (val === 12) {
    // Cambia esta línea
    return "Equal";
  }
  return "Not Equal";
}

const v = testEqual(32);
console.log(v);
