const setFirstElement = (arr, v) => {
  arr[0] = v;
  return arr;
};

const v2 = setFirstElement([1, 2], 3);

console.log(v2);
