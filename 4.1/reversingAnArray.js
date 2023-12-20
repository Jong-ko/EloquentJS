// Your code here.

function reverseArray(array){
  // console.log(array.pop())
  let newArray = []
  for(i = 0; i <= array.length; i =+ 1) {
    newArray.push(array.pop())
  }
  return newArray
}

function reverseArrayInPlace(array){
  for(i = 0; i <= array.length; i =+ 1) {
    array.push(array.pop())
  }
return array
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]