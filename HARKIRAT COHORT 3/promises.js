// // function logName(){
// //     console.log("Harkirat")
// // }
// // setTimeout(logName,3000)



// // function main(){
// //     console.log('hello')
// // }

// // setTimeout(main, 3000);


// function setPromisified(ms){
//     return new Promise()

// }

// function callback(){
//     console.log("3 seconds have passed")
// }

// // setPromisified(3000).then(callback)///---->nothing just lloks like setTimeout(callback,3000)

// let a =  setPromisified(5000)
// console.log(a);


// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function callback() {
//   console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);


function random(resolve){
        setTimeout(resolve,3000)
}

let p = new Promise(random)
// console.log(p);


function callback() {
    console.log("Callback is called");
}

p.then(callback)