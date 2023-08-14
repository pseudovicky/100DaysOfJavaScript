# Conditional Statement 

Sometimes we might have to execute a block of code based off some condition.
For example a prompt might ask for the age of the user and if its greater than 18 display a special message.

## In JavaScript we have three forms of if.... else statement :-

1. if statement 
2. if...else statement
3. if...else..if...else statement

## if statement

The if statement in javascript looks like this
if(condition){
  //execute this code
}

The if statement evaluates the condition inside the () if the condition is evaluated to true, the code is not executed.


## if- else statement

The if statement can have an optional else clause. The syntax looks like this
if(condition){
  // block of code if condition true
}else{
  // block of code if condition false
}

if the condition is true, code inside if iss executed else code inside else block is executed

## if else if statement

Sometimes we might want to keep checking a set of conditions one by one until one mmatches. we use if else if for achieving this.

  Stntax of if else if looks like this
if(condition){
    // this code
}else if(condition){
  // this code
}else if{
  // this code
}else{
  // last this code
}

## Ternary Operator:-

Evaluates a condition and executes a block of code based on the condition.
condition ? exp1 : exp2

Example syntax of ternary operator looks like this:
(marks >= 40) ? "Pass" : "Fail"