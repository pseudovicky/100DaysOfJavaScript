//  Chapter 1 - Practice Set

// 1. Create a variable of type string and try to add a number to it.
let a = "Vicky"
let b = 6
console.log(a + b)

// 2. Use typeof operator to find the datatype of the string in last question.
data_type = typeof a
console.log(data_type)
data_type2 = typeof b
console.log(data_type2)
console.log(typeof (a+b) )

// 3. Create a const object in javascript can you change it to hold a number later ?
const p = {
    name : "Vicky",
    section : 1,
    isPrinciple: false
  }
  // p = "Viki" 
  // No, We can not change the value of const.
  
  
  // 4. Try to add a new key to the const object in problem 3 were you able to do it ?
  
  const student = {
    name : "Vicky",
    enrollment : 194192850,
    university : "IGNOU",
  }
  console.log(student)
  
  student["Program"] = "BCA"
  console.log(student)
  student["age"] = 20
  console.log(student)
  student["age"] = 23
  console.log(student) 
  
  // 5. Write a js problem to create a word- meaning dictionary of 5 words.
  
  const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work.",
    chill : "to relax and not feel angry or nervous about anything",
    anxiety: "a feeling of worry or fear, especially about the future",
  }
  
  console.log(dict)
  
  console.log(dict["anxiety"])
  console.log(dict.yakka)