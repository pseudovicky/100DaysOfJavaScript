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




