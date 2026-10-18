let str = "";

for (let i = 0; i < 9; i++) {
  str += i;
}

console.log(str);
// Expected output: "012345678"

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 3);

let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
  console.log(fruit);
}