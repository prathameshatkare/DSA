let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

let result2 = ((a = 5), (b = 10), a + b);
console.log(result2);

let y = (3, 7, 12);
console.log(y);

let x = "25";
console.log(+x);
console.log(-x);
console.log(++x);
console.log(--x);
console.log(x++);
console.log(x);
console.log(x--);
console.log(x);



let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0