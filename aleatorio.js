const MAX = 6;
const MIN = 1;
const v = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

console.log(v);

const aleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const v2 = aleatorio(1, 6);
console.log(v2);
