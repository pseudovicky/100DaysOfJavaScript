let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        alert("Hey I am resolved")
        resolve(1);
    }, 2000)
})

p1.then(()=>{
    console.log("Hurray")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            return 4
        }, 6000)
    })
}).then((value) => { console.log(value) })

p1.then(()=> {
    // alert("Hurray")
    console.log("Congratulation this promise is now resolved")
})