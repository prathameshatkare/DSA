from pathlib import Path
import pypandoc

content = r"""# JavaScript Learning Notes — Day 1 & Day 2

> A beginner-friendly recap of the JavaScript topics studied on October 15 and 16, 2026.

## Learning approach

The learning method is:

1. Understand the concept in simple language.
2. Predict what a code snippet will output.
3. Write or modify code.
4. Check the result and explain *why* it happens.
5. Move to the next topic only after the basics are clear.

---

# Day 1 — JavaScript Fundamentals

## 1. Ways to run JavaScript

JavaScript can be run in different environments:

- **Browser Developer Console:** useful for quickly testing JavaScript.
- **HTML `<script>` tag:** runs JavaScript as part of a web page.
- **Node.js:** runs JavaScript outside the browser.

## 2. `console.log()`

`console.log()` prints a value to the console. It is useful for checking values and understanding program execution.

```js
console.log("Hello, JavaScript!");
console.log(100);
```

Output:

```text
Hello, JavaScript!
100
```

## 3. Variables: `var`, `let`, and `const`

A variable is a named place to store a value.

```js
let price = 100;
price = 200;

const productName = "Mobile";

console.log(price);       // 200
console.log(productName); // Mobile
```

Basic rules:

- `let` is used when a variable may need to be reassigned.
- `const` is used when the variable binding should not be reassigned.
- `var` is an older declaration style. Prefer `let` and `const` in modern JavaScript unless there is a specific reason to use `var`.

### Important: `const` and arrays

`const` prevents reassignment of the variable, but it does not prevent changes to the contents of an array.

```js
const products = ["Mobile", "TV", "AC"];
products.push("Watch");

console.log(products);
// ["Mobile", "TV", "AC", "Watch"]
```

This is allowed because the array itself has not been reassigned.

## 4. Basic data types

JavaScript values have different types.

```js
const productName = "Mobile";       // string
const price = 22000;                // number
const isAvailable = true;           // boolean
let discount;                       // undefined
const selectedItem = null;          // null
const products = ["Mobile", "TV"];  // array
const product = { name: "Mobile" }; // object
```

Common types:

- **String:** text, such as `"Mobile"`.
- **Number:** numeric values, such as `22000` or `4.5`.
- **Boolean:** `true` or `false`.
- **Undefined:** a declared variable that has not been assigned a value.
- **Null:** an intentional absence of a value.
- **Array:** an ordered collection of values.
- **Object:** a collection of key-value pairs.

`typeof` can help inspect a value's type:

```js
console.log(typeof "Mobile"); // "string"
console.log(typeof 22000);    // "number"
console.log(typeof true);     // "boolean"
```

Note: `typeof null` returns `"object"` because of a historical JavaScript quirk.

## 5. Operators

Operators let us perform calculations, comparisons, and logical checks.

```js
const total = 100 + 50;
console.log(total); // 150

console.log(10 > 5);  // true
console.log(10 === 5); // false
```

- **Arithmetic operators:** `+`, `-`, `*`, `/`, `%`
- **Comparison operators:** `>`, `<`, `>=`, `<=`, `===`, `!==`
- **Logical operators:** `&&`, `||`, `!`
- **Assignment operators:** `=`, `+=`, `-=`

Prefer strict equality (`===`) when you want to compare values without automatic type conversion.

## 6. Day 1 practice example

```js
const productName = "Mobile";
const price = 22000;

console.log(productName);
console.log(price);

const productArray = ["Mobile", "TV", "AC"];
productArray.push("Watch");

console.log(productArray);
```

This combines variables, strings, numbers, arrays, `console.log()`, and the array `push()` method.

---

# Day 2 — Declarations, Hoisting, Scope, and TDZ

## 1. Variable declaration, initialization, and reassignment

These terms are related but different:

```js
let score;      // Declaration
score = 100;    // Assignment / initialization
score = 200;    // Reassignment
```

With `let`, reassignment is allowed. With `const`, a value must be provided when declaring the variable, and the binding cannot later be reassigned.

```js
const age = 20;
// age = 21; // TypeError: assignment to a constant variable
```

## 2. Scope

**Scope** determines where a variable can be accessed.

### Global scope

A variable declared at the top level is generally available to code in its surrounding script or module scope.

```js
const appName = "My Store";

function showApp() {
  console.log(appName);
}

showApp(); // My Store
```

### Function scope

A `var` declared inside a function is limited to that function.

```js
function test() {
  var message = "Hello";
  console.log(message); // Hello
}

test();
// console.log(message); // ReferenceError
```

### Block scope

A block is code inside `{ }`, such as an `if` block. `let` and `const` are block-scoped.

```js
if (true) {
  let city = "Pune";
  const country = "India";

  console.log(city);    // Pune
  console.log(country); // India
}

// console.log(city); // ReferenceError
```

### `var` versus `let` inside a block

```js
var a = 10;
let b = 20;

if (true) {
  var a = 30;
  let b = 40;
}

console.log(a); // 30
console.log(b); // 20
```

Why?

- `var` is not block-scoped. The inner `var a` refers to the same variable and changes its value to `30`.
- The inner `let b` creates a separate block-scoped variable. It does not change the outer `b`, which remains `20`.

## 3. Hoisting

**Hoisting** describes how JavaScript processes declarations before executing the code in a scope. It is a useful mental model; JavaScript does not literally move source code lines to the top.

### `var` is initialized to `undefined`

```js
console.log(x); // undefined
var x = 10;

console.log(x); // 10
```

The declaration is processed before execution, but the assignment `x = 10` happens when that line runs.

### `let` and `const` are in the Temporal Dead Zone before initialization

```js
console.log(y); // ReferenceError
let y = 20;
```

`y` is known to JavaScript, but accessing it before its declaration initializes it causes a `ReferenceError`.

### Function declarations can be called before their textual position

```js
welcome(); // Welcome!

function welcome() {
  console.log("Welcome!");
}
```

A function declaration is available before its position in the code.

### A function expression assigned to `const` follows variable rules

```js
// sayHi(); // ReferenceError

const sayHi = function () {
  console.log("Hi!");
};

sayHi(); // Hi!
```

The function expression is assigned to `sayHi` only when the `const` declaration executes.

## 4. Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the period from entering a scope until a `let` or `const` declaration is initialized. During that period, accessing the variable throws a `ReferenceError`.

```js
console.log(score); // ReferenceError
let score = 100;
console.log("Finished"); // Not reached if the error is uncaught
```

Important points:

- TDZ is **not** a timer and does not depend on how many milliseconds have passed.
- It depends on whether initialization has happened before the variable is accessed.
- An uncaught error stops the current script's normal execution at that point.

## 5. `setTimeout()` and execution order

`setTimeout(callback, delay)` schedules a callback to run later. Even with a delay of `0`, the callback does not run immediately; it runs after the current synchronous code finishes and the event loop can process it.

```js
setTimeout(() => {
  console.log(score);
}, 0);

let score = 100;

console.log("Finished");
```

Typical output:

```text
Finished
100
```

Execution order:

1. JavaScript schedules the callback.
2. `let score = 100` initializes `score`.
3. `console.log("Finished")` prints `Finished`.
4. The scheduled callback runs and prints `100`.

### Compare with direct access

```js
console.log(score); // ReferenceError
let score = 100;
```

This fails because `console.log(score)` executes immediately, before initialization.

**Key lesson:** `setTimeout` does not remove the TDZ. It changes when the callback runs. If a callback accesses a `let` or `const` variable before that variable has been initialized, a `ReferenceError` can still occur.

## 6. Day 2 knowledge-check results

Topics checked through short quizzes:

- Variable declaration and reassignment: **3/3 correct**
- Hoisting: **4/4 correct**
- `const` behavior and array mutation: answers correct
- Basic data types and scope: studied with examples and practice

## 7. Common mistakes to avoid

1. Thinking `const` makes an array completely immutable. It prevents reassignment of the binding, not array mutation.
2. Thinking `let` and `const` are not hoisted. They are hoisted but cannot be accessed before initialization.
3. Thinking hoisting literally moves source-code lines. It is a mental model for how declarations are processed.
4. Thinking every function can be called before its line. Function declarations can; function expressions assigned to `let` or `const` cannot be used before initialization.
5. Thinking `setTimeout(..., 0)` executes immediately. It schedules a callback for later.
6. Confusing TDZ with elapsed time. TDZ is about initialization and access order.

---

# Quick Revision Checklist

Use this checklist to test whether you can explain each concept without looking at the notes.

- [ ] Run JavaScript in a browser console, HTML page, or Node.js.
- [ ] Explain what `console.log()` does.
- [ ] Choose between `var`, `let`, and `const`.
- [ ] Identify strings, numbers, booleans, `undefined`, `null`, arrays, and objects.
- [ ] Use basic arithmetic, comparison, and logical operators.
- [ ] Explain global, function, and block scope.
- [ ] Predict the output of `var` and `let` inside an `if` block.
- [ ] Explain hoisting for `var`, `let`, `const`, and function declarations.
- [ ] Recognize a Temporal Dead Zone `ReferenceError`.
- [ ] Explain why `setTimeout(..., 0)` runs after synchronous code.

## Recommended study pattern

For each code example, try to answer these questions before running it:

1. What will the output be?
2. Which line executes first?
3. What is the current value of each variable?
4. Is the variable in scope?
5. Has the variable been initialized yet?
6. Why does JavaScript produce this result?

Understanding *why* the output occurs is more important than memorizing it.
"""

output_path = "/mnt/data/README.md"
pypandoc.convert_text(
    content,
    "md",
    format="md",
    outputfile=output_path,
    extra_args=["--standalone"]
)
print(f"Created: {output_path}")
