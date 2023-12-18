try {
    let a = 0;
    console.log('program ran successfully.');
    console.log(Program);
    console.log('program ran successfully.');
}

catch (err) {
    console.log('There is an error.')
    console.log(error - hu - main)
}

finally {
    console.log("I am a good boy.")
    console.log('This have super power to run always.');
    // close the file
    // close loop
    // write to log file
    // used for program clean up
}



// finally in return function 

const f = () => {
    try {
        console.log('mao mao');
        return
    }
    catch (err) {
        console.log('nihao');
        console.log('error aaya hai');
    }
    finally {
        console.log('Mujhe naa Chuna pari hu main !');
    }

}

f()
console.log('END')


