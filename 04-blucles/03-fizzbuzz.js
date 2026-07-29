for (let i = 1; i <= 20; i++) {
  let r;
  if (i % 3 === 0 && i % 5 === 0) {
    r = "fizzbuzz";
  } else if (i % 3 === 0) {
    r = "fizz";
  } else if (i % 5 === 0) {
    r = "buzz";
  } else {
    r = i;
  }
  console.log(r);
}
