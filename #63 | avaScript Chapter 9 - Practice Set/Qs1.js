// Qs 1. Write a program to load a javaScript file in a browser using promises. Use .then()
//  to display an alert when the load is complete.
const loadScript = async(src)=>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.src  = src
        script.onload = ()=>{
            resolve(src + " Done Success !");
        }
        document.head.append(script);
    })
}

let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
a.then((value) =>{
    console.log(value);
})