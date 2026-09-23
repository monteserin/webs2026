const numbers = [1, 9, 3, 8, 5, 7];

for (let i = 0; i < numbers.length; i++) {
  const r = numbers[i] * 2;
  console.log(numbers[i] * 2);
}

for (n of numbers) {
  console.log(n * 2);
}
