### sort methods

sort() methods is used to sort an array alphabetically
let a = [7,8,50,9]
a.sort()
output - > 7,50,8,9
a changes to given output 
[Modifies the original array. ]

sort() takes an optional compare function. if this function is provided as the first argument. 
the sort() function will consider these values (the values returned from the compare function) as the basis of sorting.

### splice() method

splice can be used to add new items to an array.
const numbers = [1,2,3,4,5]
numbers.splice(2,1,23,24) 
  - return deleted items modifies an array .
  four arguments of splice:- 
    2- position to add ,
    1- number of elements to remove, 
    23,24 - elements to be added


### slice() method

slices out a piece from an array. It creates a new array.

const num = [1,2,3,4]
      num.slice(2) -> [3,4]
      num.slice(1,3) -> [2,3]

### reverse() method 

Reverses the elements in the source array.
  
