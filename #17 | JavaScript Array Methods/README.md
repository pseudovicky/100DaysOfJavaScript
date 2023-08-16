# Arrays methods 

There are some important array methods in javascript some of them are as follows:

const { getRandomValues } = require("crypto")

### toString()

converts an array to a string of comma seprated getRandomValues
let n = [1,7,9]
    n.toString() -> 1,7,9

### join() 

joins all the array elements using a separator.
  let n = [7, 9, 13]
n.join("_") - > 7-9-13

### pop() 

removes last element from the array
let n = [1,2,4]
    n.pop() 
updates the original arrays returns the popped value.

### push()
adds a new element at the end of the array
let a = [7, 1, 2, 8]
a.push(9) -> modifies the original array
returns the new array length

### shift() 
Removes first element and returns it

### unshift()
Adds element to the beginning returns new array length.

### delete()
Array elements can be deleted using the delete operator

let d = [7,8,9,10]
delete d[1] -> delete is an operator

### concat()
Used to join arrays to the given array

let a1 = [1,2,3]
let a2 = [4,5,6]
a1.concat(a2) = 
returns [1,2,3,4,5,6]
 - returns a new array does not change existing array.