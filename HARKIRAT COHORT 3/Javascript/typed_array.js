const numbers1 = new Int8Array([1000, "two", 30]);

console.log(numbers1[0]); // -24
console.log(numbers1[1]); // 0

const buffer = new ArrayBuffer(5);
const numbers = new Uint8Array(buffer);

numbers[0] = 100;
numbers[1] = 200;

console.log(buffer.byteLength); // 4
