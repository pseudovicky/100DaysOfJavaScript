
async function vicky (){

let DelhiWeather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("27 Deg")
    }, 2000)
})

let bangloreWeather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("21 Deg")
    },5000)
})
    // DelhiWeather.then(alert)
    // bangloreWeather.then(alert)
    console.log('Fetching delhi weather please wait...')
    let delhiW = await DelhiWeather
    console.log('Fetched delhi weather is ' + delhiw)
    console.log('Fetching banglore weather please wait...')
    let bangloreW = await bangloreWeather
    console.log('Fetched banglore weather is ' + bangloreW)
    return [delhiw, bangloreW]
}

const cherry = async () => {
    console.log("Hey I am cherry and I am not waiting ")
}
const main1 = async () =>{
    console.log("Welcome to weather control room")
    let a = await vicky()
    let b = await cherry()
    a.then((value)=>{
        console.log(value)
    })
}
main1()

// console.log("welcome to weather control room")
// let a = vicky()
// a.then((value)=>{
//     console.log(value)
// })
// console.log(a)


// vicky()


// harry().then((x)=>{
//     alert(x)
// })
