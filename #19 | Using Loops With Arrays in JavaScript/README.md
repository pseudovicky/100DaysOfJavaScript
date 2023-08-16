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

### filter() 
Filters an array with values that passes a test, Create a new array.
  const a = [1,2,3,4,5]
        a.filter(greater_than_5)