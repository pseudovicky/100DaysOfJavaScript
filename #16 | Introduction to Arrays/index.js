let a = [1,2,3,4,5,6,7]
console.log(a, typeof a) // type object
console.log(a[4]) //indexing

// This is an Array.

let marks_class_12 = [ 91, 82, 63, 89, 56, 74, null, false,  "Not Present" ]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[5])
console.log(marks_class_12[8])
console.log(marks_class_12[17]) // undefined coz index not available

console.log("The length of marks class 12 is ",marks_class_12.length)

marks_class_12[12] = 45 //adding a new value to the array
console.log(marks_class_12)

// changing the value of the array
marks_class_12[0] = 99
console.log(marks_class_12)


for(let i=0;i< marks_class_12.length;i++){
    console.log(marks_class_12[i])
}