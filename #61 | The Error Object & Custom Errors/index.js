
//  HOW TO THROW AN CUSTOM ERROR.


try {
    vicky ;
} catch (error) {
    // console.log(error)
    console.log(error.name)                // ReferenceError
    console.log(error.message)         // vicky is not defined
}


try {
    console.log(vicky)
    throw new ReferenceError("Vicky is not good.");
} catch (error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack)
}

// error.name = ReferenceError
// error.message =  vicky is not defined
// error.stack =  ReferenceError: vicky is not defined
                      // at <anonymous>:2:17


try {
    let age = prompt("Enter your age");
    age = Number.parseInt(age)
    if(age>150){
        throw new ReferenceError("This is probably not true.");
        
    }
} catch (error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack)
}

console.log("The script is still running")