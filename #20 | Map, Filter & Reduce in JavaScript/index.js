// map method

let arr = [45,23,21,46]
// console.log(arr)
let a = arr.map((value,index, array)=>{
  console.log(value, index, array)
  return  value + index
})

console.log(a)
// map creates a new array 


// array filter method

// filter the value which is less than 10 in given array
let arr2 = [2,45,8,9,33,44,76,90,1,5,3,56,4]
let a2 = arr2.filter((a)=>{
  return a<10
})

console.log(a2,arr2)

// reduce method

let arr3 = [1,2,3,4,5,6]

let a3 = arr3.reduce((x, y)=>{
  return x + y
})
console.log(a3, arr3)
// 1+2 =3
// 3+3 = 6
// 6+ 4 = 10
// 10+5 = 15
// 15+ 6 = 21

let arr4 = [11,32,45,67,86]
const reduce_func = (num1,num2)=>{
  return num1 - num2
}
let a4 = arr4.reduce(reduce_func)
console.log(a4, arr4)