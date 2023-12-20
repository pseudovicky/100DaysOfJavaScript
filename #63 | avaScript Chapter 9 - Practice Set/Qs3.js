// Qs 3. Create a promise which rejects after 3 seconds. use an async / await to get its value. 
//  use a try catch to handle its error.

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

let p = ()  => {
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error('Please this is not acceptable'));
    }, 3000)
  })
}

let a = async () => {
    try{
        let c = await p()
        console.log(c)
    }
    catch(err){
        console.log('this error have been handled.');
    }
  }
a();

// Promise 
// {<pending>}[[Prototype]]: 
// Promise[[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined
//  this error have been handled. 