// chapter 2 - Practice Sets :-

/* 
1.  Use Logical Operators to find whether the age of the person lies 
    between 10 and 20. 
2. Demonstrate the use of switch case statements in javascript.
3. Write a javascript program to find whether a number is divisible 
    by 2 and 3.
4. Write a javascript program to find whether a number is divisible
    by either 2 or 3.
5. Print "Drive" or "You can not Drive" based on age being 
    greater than 18 using ternary operator.
*/

// Solution 1 :-
let age = parseInt(prompt("Enter your age: "))
if(age>10 && age<20){
    console.log("Your Age is lies between 10 and 20.")
}else{
    console.log("Your Age doesn't lies between 10 and 20.")
}