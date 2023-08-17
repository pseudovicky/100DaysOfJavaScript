// Chapter 5 - Practice set
/*
1. Create an array of numbers and take input from the user to add numbers to this array.

2. keep adding numbers to the array in (1) until 0 is added to the array.

3. filter for numbers divissible by 10 from a given array.

4. create an array of square of given numbers

5. Use reduce to calculate factorial of a given numbers from an array of first ( n natural numbers where factorial needs to be calculated. )
*/

// problem 1 solution:

array1 = []
n = prompt("How many numbers do you want to add an array: ")
for(let i=0;i<n;i++){
  num = prompt("Enter value: ")
  array1.push(num)
}
console.log("This is your final array = ", array1)


// problem 2 solution 

array2 = []
keepadding = true
while(keepadding){
  additem = prompt("add item value: ")
  if(additem!=0){
    array2.push(additem)
  }else{
    keepadding = false
  }  
}
console.log(array2)