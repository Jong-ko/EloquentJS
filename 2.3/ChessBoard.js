console.log("hello world");

let size = 50;
let row = "";

for (let i = 1; i <= size; i++) {
  if (i % 2 == 0) {
    for (let i = 1; i <= size; i++) {
      if (i % 2 == 0) {
        row = row + " ";
      } else {
        row = row + "#";
      }
    }
    // console.log(row);
    // row = "";
    row = row + "\n"
  } else {
    for (let i = 1; i <= size; i++) {
      if (i % 2 == 0) {
        row = row + "#";
      } else {
        row = row + " ";
      }
    }
    row = row + "\n"
    // console.log(row);
    // row = "";
  }
}
 console.log(row)