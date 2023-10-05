let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Resolve after 2 second')
        resolve(56)
    },2000)
})

p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve("Promise2")},2000)

    })
    return p2
}).then((value)=>{
    console.log("We are done")
    return 2
}).then((value)=>{
    console.log("Now we are pakka done")
})