//  Qs 4. Write a program using promise. all() inside an async/await to await 3 promises. 
//  compare its results with the case where we await these promises one by one.

let p1 = async () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(10);
        } ,2000)
    })
}

let p2 = async () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(20);
        } ,1000)
    })
}

let p3 = async () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(30);
        } ,3000)
    })
}

const run = async () =>{
    console.time('run')
    let a1 = await p1()
    console.log(a1);
    let a2 = await p2()
    console.log(a2);
    let a3 = await p3()
    console.log(a3);
    console.timeEnd("run");
}

run();


// Promise 
// {<pending>}[[Prototype]]: 
// Promise[[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined

// 10
// 20
// 30
// run: 6007.2080078125 ms