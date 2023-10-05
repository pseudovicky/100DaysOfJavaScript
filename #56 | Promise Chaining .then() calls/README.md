# Promises Chaining -
We can chain promises and make them pass the resolved values to one another like this

### Syntax: 

p.then(function(result)=>{        // p is a promise
    alert(result); 
    return 2;
}).then...

The idea is to pass the result through the chain of the .then handlers.

there is the flow of execution

1. The initial promise resolves in 1 second(assumption).
2. The next .then() handler is then called, which returns a new  
   promise(resolved with 2 value)
3. The next .then() gets the result of preserves one and this keeps on going.

Every call to .then() returns a new promise whose values is passed to the next one and so on. we can even create custom promises inside then().

## Attaching multiple handlers :
We can attach multiple handlers to one promise. they dont pass the result to each other; instead they process it independently.

let p is a promise

p.then(handler 1)   \
p.then(handler 2)    | Runs Independently
p.then(handler 3)   /

