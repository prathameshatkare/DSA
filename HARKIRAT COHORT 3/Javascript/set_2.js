let numbers = new Set([10, 20, 10, 30, 20]);

console.log(numbers); // Set(3) {10, 20, 30}

let fruits = new Set();

fruits.add("Apple");
fruits.add("Mango");
fruits.add("Apple");

console.log(fruits); // Set(2) {"Apple", "Mango"}

let letters = new Set(["B", "A", "C"]);

console.log([...letters]); // ["B", "A", "C"]

let data = new Set([10, "Hello", true]);

console.log(data.size); // 3

let colors = new Set(["Red", "Blue"]);

console.log(colors.has("Red")); // true
console.log(colors.has("Green")); // false
