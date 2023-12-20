// Qs 2. Write a same program for previous Question and use async / await syntax. 

// Qs 2. solution 

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
const main2 = async ()=>{
    console.log(new Date().getMilliseconds())
let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
    console.log(a);
    console.log(new Date().getMilliseconds());
}
main2();


// 894
// Promise {<pending>}
// [[Prototype]] : Promise
// [[PromiseState]]  : "fulfilled"
// [[PromiseResult]] : undefined
// https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js 
//  Done Success !
// 914

// Wed Dec 20 2023 15:15:18 GMT+0530 (India Standard Time)
// Wed Dec 20 2023 15:15:18 GMT+0530 (India Standard Time)