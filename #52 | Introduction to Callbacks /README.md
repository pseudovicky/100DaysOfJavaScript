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

