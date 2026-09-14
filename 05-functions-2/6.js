function test(val) {
  if (val >= 10 && val <= 20) {
    // Cambia esta línea
    return "Inside";
  } else {
    return "Outside";
  }
}

const v = test(22);
console.log(v);
