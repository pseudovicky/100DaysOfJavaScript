let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        alert("Hey I am resolved")
        resolve(1);
    }, 2000)
})

