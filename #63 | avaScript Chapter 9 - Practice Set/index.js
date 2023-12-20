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


// Qs 2. Write a same program for previous Question and use async / await syntax. 

// Qs 2. solution 

// const loadScript = async(src)=>{
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement("script");
//         script.src  = src
//         script.onload = ()=>{
//             resolve(src + " Done Success !");
//         }
//         document.head.append(script);
//     })
// }

// const main2 = async ()=>{
//     console.log(new Date().getMilliseconds())
// let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
//     console.log(new Date().getMilliseconds());
// }
// main2();


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


// Qs 3. Create a promise which rejects after 3 seconds. use an async / await to get its value. 
//  use a try catch to handle its error.

//  Qs 4. Write a program using promise. all() inside an async/await to await 3 promises. 
//  compare its results with the case where we await these promises one by one.




