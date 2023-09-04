# Chapter 9 - Callbacks, promises &  asynclawait

Asynchronous actions are the actions that we initiate now and they finish later. eg. SetTimeout synchronous actions are the actions that initiate and finish one-by-one.

## callback functions
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete an action.

Here is an example of a callback:

function loadScript(src, callback){
    let script = document.createElement('script')
    script.src = src
    script.onload = () => callback(script)
    document.head.append(script)
}

Now we can do something like this:

loadScript('https://cdn.viki.com',(script)=>{
    alert('script is loaded')
    alert('script.src);
});


This is called "callback-based" style of async programminf. A function that does something asynchronously should provide a callback argument where we put the function to run after its complete.

### Handling errors
We can handle callback errors by supplying error argument like this:

function loadScript(src, callback){
    ...
    ...
    script.onload = ()=> callback(null, script);
    script.onerror = () => callback(newError("failed));
    ...
}
Then inside of loadScript call:

loadScript('cdn/viki' function(error, script){
    ...
    if (error){
        // handle error
    }
    else {
        //script loaded
    }
});