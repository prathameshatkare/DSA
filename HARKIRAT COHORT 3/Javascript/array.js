let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[0]); // Apple
alert(fruits[1]); // Orange
alert(fruits[2]); // Plum

let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

let marks = [70, 85, 90, 65, 80];

console.log(marks);


let data = [25, "Prathamesh", true, null, { city: "Pune" }, [1, 2, 3]];


console.log(data[4].city)



let numbers = [10,20,40,50];

let result = numbers.push(1);

console.log(result);  // 3
console.log(numbers); // [10, 20, 30]


///USING THE MAP FOR CONVERTING THE NUMBERS 

let numbers1 = [1, 2, 3, 4];

let doubled = numbers.map((n)=> {
    return n * 2;
});

console.log(doubled);
[2, 4, 6, 8]


///FILTER DEPERATE OUT THE ELEMENT WHICH MEATS CONDITIONS
let numbers11 = [5, 12, 8, 20, 3, 15];

let result1 = numbers.filter(number => number > 10);

console.log(result);
// [12, 20, 15]



let users = [
    { name: "Amit", age: 17 },
    { name: "Priya", age: 24 },
    { name: "Rahul", age: 16 },
    { name: "Sneha", age: 28 }
];

let adults = users.filter(u => u.age >= 18);

console.log(adults);
// Priya and Sneha's user objects




////reduce() processes an array and accumulates its elements into a single result.


let numbers2 = [10, 20, 30, 40];

let total = numbers2.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);
// 100



// push()
// Add elements at the end.
// [1, 2] → [1, 2, 3]




// pop()
// Remove the last element.
// [1, 2, 3] → [1, 2]




// map()
// Transform every element into a new value.
// [1, 2, 3] → [2, 4, 6]




// filter()
// Keep only elements matching a condition.
// [1, 2, 3, 4] → [2, 4] if keeping even numbers


// reduce()
// Accumulate elements into a result.
// [1, 2, 3] → 6 when summing



