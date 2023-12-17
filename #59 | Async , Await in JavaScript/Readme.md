# Async/Await 

There is a special syntax to work with promises in js.
A function can made async by using async keyword like this :

async function vicky(){
    return 7;
}

An async function always return a promise. other values are wrapped in a promise automaticlly.

We can do something like this :

vicky().then(alert)

so, async ensures that the function return a promise and wraps non proomises in it.

## The Await Keyword 

There is another keyword called await that works only inside async functions.

    let value = await promise;

The await keyword makes js wait until the promise settles and returns its value.

It's just a more elegant syntax of getting the promise result than promise then + its easier to read and write.
