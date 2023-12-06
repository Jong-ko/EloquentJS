function isEven(x) {
  result = undefined;
  if (x == 0) {
    result = true;
  } else if (x == 1) {
    result = false;
  } else {
    if (x < 0) {
      x = x * (-1);
      isEven(x)
    } else {
      x = x - 2;
      isEven(x);
    }
  }
  return result;
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
