// Your code here.

// function countBs(string) {
//   result = 0
//   for(let i = 0; i < string.length ; i++) {
//     if (string[i] == "B"
//     ) result++
//   }
//   return result
// }

function countChar(string, letter) {
  result = 0
  for(let i = 0; i < string.length ; i++) {
    if (string[i] == letter
    ) result++
  }
  return result
}

function countBs(string) {
  return countChar(string, "B")
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4