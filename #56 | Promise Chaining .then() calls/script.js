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

const loadScript = (src)=>{
    return new Promise((resolve, reject) => {
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(script)
    script.onload = ()=>{
        resolve(1)
    }
        script.onerror = ()=>{reject(0)}
    })
}


let p3 = loadScript("https://localhost:3000/index.js")
p3.then((value)=>{
    console.log(value)
    return loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')
}).then((value) => {
    console.log("Second script ready")
}).catch((error) => {
    console.log("We are sorry but we are having problems loading this script")
})