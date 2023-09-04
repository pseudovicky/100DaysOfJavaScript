# Introduction to Promises 

The solution to the callback hell is promises. A promise is a * promise of code execution". The code either executes or fails , in both the cases the  subscribers will be notified.

The syntax of a promise looks like this:

let promise = new Promise( function(resolve, reject){
    //execute
});

resolve and reject are two callbacks provided by javascript itself. They are called like this:

resolve(value) -> If the job is finished successfully.

reject(error) -> if the job fails

The promise object returned by the new promise constructor has these properties.

1. state: Initially pending, them changes to either 'fulfiled' when resolve is called or 'rejected'.