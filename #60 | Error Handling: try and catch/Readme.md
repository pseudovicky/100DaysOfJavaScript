# Error Handling

We all make mistakes also sometimes aur script can have errors. Usually a program helps when an error occures.

The try... catch syntax allows us to catch errors so that the script insted of dying can do some things more reasonable.

## The try... catch syntax 
The try catch syntax has two main blocks: 
try and then catch 

try {
    // try the code 
} catch(error){      // The error variable contain an error object
    // error handling       
} 

It  works like this 
1. first the code in try is excuted 
2. If there is no error, catch is ignored else catch is executed 
try catch works synchronously 
if an execption happens in scheduled code, like in setTimeout, then try...catch wont catch it :

try {
    setTimeout(function(){
        //error code // script dies and catch wont work
    })
    catch...
}

Thats becouse the function itself is executed later , when the engine has already lift the try... catch construct.

## The error object
For all the built in errors, object has two main properties : 

try {
    hey; // error variable not defined
} catch (error) {
    alert(error.name)
    alert(error.message)
    alert(error.stack)
}