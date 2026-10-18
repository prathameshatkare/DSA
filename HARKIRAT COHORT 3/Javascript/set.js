let students = new Map();

students.set(101, "Amit");
students.set(102, "Priya");
students.set(103, "Rahul");
students.set(104,'prathamesh')
console.log(students);

console.log(students.get(104))


///set => to store the new value
///get taking value 

let user = { id: 1 };

let userData = new Map();

userData.set(user, "Logged in");

console.log(userData.get(user));
// "Logged in"




let map = new Map();

map.set({ id: 1 }, "Amit");

console.log(map.get({ id: 1 }));
// undefined



let map1 = new Map();

map.set("c", 30);
map.set("a", 10);
map.set("b", 20);

console.log([...map.values()]);
// ["c", "a", "b"]



let userMetadata = new WeakMap();

let user1 = { name: "Amit" };
let user2 = { name: "Priya" };

userMetadata.set(user1, { role: "admin" });
userMetadata.set(user2, { role: "editor" });

console.log(userMetadata.get(user1));
// { role: "admin" }

console.log(userMetadata.get(user2));
// { role: "editor" }