# Consumers : then & catch

The consuming code can recieve the final result of a promise through then & catch.

The most fundamental one is then promise. 
then(function(result){ */ handle */ },
     function(error){ /* handle error*/ }
);

If we are interested only in sucessful completions, 
we can provide only one function argument to .then():

let promise = new Promise(resolve => {
    setTimeout(()=> resolve('done'), 1000);
});

promise.then(alert);


if we are interested only in errors we can use null as the first argument: .then(null,function ) or we can use catch:

promise.catch(alert)

promise.finally(() => { }) is used to perform general cleanups.
