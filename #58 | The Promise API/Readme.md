# Promise API

## There are 6 static methods of promise class:

1. Promise.all(promises) - waits for all promises to resolve and returns the array of their results if any one fails, it becomes the error & all other results are ignored.

2. Promise.all settled(promises) - whats for all the promises to settle and returne their results as an array of objects with status and value.

3. Promise.race(promises) - Waits for the first promise to settle and its result/error becomes the outcome.

4. Promise.any (promises) - waits for the first promise to fulfill ( & not rejected ) , and its result becomes the outcome. throws aggregate Error if all the promises are rejected.

5. Promise.resolve (value) - Makes a resolved promise with the given value.

6. Promise.reject(error) - makes a rejected promise with the given error.

Quick Quig : Try these promise APIs on your custom promises.
