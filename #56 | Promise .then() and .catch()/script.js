// resolve
let p1 = new Promise((resolve, reject) => {
    console.log('promise is pending')
    setTimeout(() =>{
        // console.log('I am a promise and i am fulfiled')
        resolve(true)
    }, 5000)
})

console.log(p1)
p1.then((value)=>{
    console.log(value)
})



// reject 
let p2 = new Promise((resolve, reject) => {
    console.log('promise is pending')
    setTimeout(() =>{
        // console.log('I am a promise and i am rejected')
        reject(new Error('I am an error'))
    }, 5000)
})

console.log(p2)
p2.then((value)=>{
    console.log(value)
})

p2.catch((error)=>{
    console.log('Some error occurred in p2.')
})