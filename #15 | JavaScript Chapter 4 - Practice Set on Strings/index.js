// Chapter 4 - practice set 

/*
1. What will the following print in javascript?
console.log("har\"".length)

2. Explore the includes, starts with  endswith functions of a string.

3. Write a program to convert a given string to lowercase.

4. Extract the amount out of this string.
" Please give Rs 1000"

5. Try to change 4th characters of a given string were you able to do ot?
*/

// problem 1. solution
// answer is =  4
console.log("har\"".length)


// problem 2 solution 
// startsWith and endsWith
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// include returns true or false .

let msg = "Good Morning!"
console.log(msg.startsWith("G") ? "Sahi baat hai" : "No its wrong")
console.log(msg.endsWith("ing!") ? "Sahi baat hai" : "No its wrong")
console.log(msg.startsWith("Good",0) ? "Sahi baat hai" : "No its wrong")
console.log(msg.endsWith("ing!",13) ? "Sahi baat hai" : "No its wrong")

// problem 3 solution

let h = "HELLO"
p = h.toLowerCase()
console.log(h,p)

// problem 4 solution

let str2 = "Please give Rs 1000"
let amount = str2.slice("Please give Rs ".length)
console.log(amount,typeof amount)
amount = Number.parseInt(amount)
console.log(typeof amount, amount)

//  problem 5 solution
let friend = "Deepika"
friend[3] = "r"
console.log(friend) // friend is not change coz str is not mutable