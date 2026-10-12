// function random(resolve){
// // console.log("hello")
// resolve()
// }

// let p =  new Promise(random)


// function callback(){
//     console.log("Promise completed")
// }
// // console.log(p)


// p.then(callback)

const fs =  require("fs")

function readthefile(resolve, reject) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    if (err) {
      reject(err);
      return;
    }

    resolve(data);
  });
}

function readFile(fileName) {
  return new Promise(readthefile);
}

const p = readFile("a.txt");

function callback(contents) {
  console.log(contents);
}

p.then(callback);



function setpromisecallback(f) {
  setTimeout(f, 3000);
  console.log("Bacche promise call ho gaya");
  for (i = 0; i < 10; i++) {
    console.log(i);
  }
}

function setPromisfied() {
  return new Promise(setpromisecallback);
}

function main() {
  console.log("Hey main is called");
}

setPromisfied().then(main);



function setpromisecallback(resolve, reject) {
  console.log("Hi");
  resolve(2);
}

function setPromisfied() {
  return new Promise(setpromisecallback);
}

function main(value) {
  console.log("main:", value);
  return 2;
}

function need(value) {
  console.log("need:", value);
  return 2;
}

setPromisfied().then(need).then(main).then(console.log);
    




function random(resolve,reject) {
    
    resolve(()=>{
        console.log("Promise completed")
    })
    reject(()=>{
        console.log("Promise completed")
    })
}

const p = new Promise(random);

p.then(() => console.log("Its done bro")).catch(()=>{
    console.log("Error")
});

// console.log(p);



