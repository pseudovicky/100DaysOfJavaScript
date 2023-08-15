/*
1. Write a program to print the marks of a student in an object using for loop.
obj = {
vicky : 98,
rohan : 70,
aakash: 7,
}
*/

// problem 1. solution :- 
let marks = {
    vicky : 98,
    rohan : 70,
    aakash: 7,
  monika: 50,
}

for(let i = 0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}