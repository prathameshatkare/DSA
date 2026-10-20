function settimeoutPromisiefied(ms){
  return new Promise(resolve => setTimeout(resolve ,ms))
}

async function solve(){
    await settimeoutPromisiefied(1000)
    console.log("Hi")
    await settimeoutPromisiefied(3000)
    console.log("Hello")
    await settimeoutPromisiefied(5000)
    console.log("Hi there")
}

solve()