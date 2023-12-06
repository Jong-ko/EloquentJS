// Your code here.
function range(start, end, increment) {
  let results = [];
  if(increment = undefined) {
    increment = 1
  }
  for (let i = start - 1; i < end; i+= increment) {
    console.log(increment)
    results.push(i + 1);
  }
  // sum(results)
  return results;
}

function sum(results) {
  let total = 0;
  for (let i = 0; i < results.length; i++) {
    total += results[i];
  }
  return total
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55
