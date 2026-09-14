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
