# Looping through Arrays 
Arrays can be looped through using the classical javascript for loop or through some other methods discussed below.

### 1. forEach loop :
calls a function, once for each array element.
  const a = [1,2,3]
  a.forEach((value,index,array)=>{
    //function logic
  });

### 2. map()  
Creates a new array by performing some operation on each array element.
  const a = [1,2,3]
  a.map( (value, index, array)=>{
    return value*value
  })

### 3. filter() 
Filters an array with values that passes a test, Create a new array.
  const a = [1,2,3,4,5]
        a.filter(greater_than_5)

### 4. reduce method 
Reduces an array to a single value
  const n = [1,8,7,11]
  let sum = number.reduce(add)
      1+8+7+11            | a function

### 5. Array from 
used to create an array from any other object
  array.from("vicky")

### 6. for...of
for of loop can be used to get the values from an array

### 7. for in 
for in loop can be used to get the keys from an array.