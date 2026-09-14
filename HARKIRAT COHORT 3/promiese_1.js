function random(resolve){
// console.log("hello")
resolve()
}

let p =  new Promise(random)


function callback(){
    console.log("Promise completed")
}
// console.log(p)


p.then(callback)