# The Error Object 

For all the built in errors, the error onject has two main properties:

try {
    hey; // error variable not defined
} catch(err){
    alert(err.name)
    alert(err.message)
    alert(err.stack)
}

## Throwing Custom Error 
We can throw our own error by using the throw syntax 

if (age > 180 ) {
    throw new Error("Invalid age")
}

We can also throw a particular error by using the built in constructor for standard errors :

let eror = new SyntaxaError(message)
                            or
            new Refrence Error(message)        