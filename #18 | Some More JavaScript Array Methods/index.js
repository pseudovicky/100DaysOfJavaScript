// concat
let num = [1,2,3,4]
let num2 = [5,6,7,8]
let num3 = [211, 233, 543, 848, 883 ,54]
console.log(num.length)
delete num[1]
console.log(num.length, num)

let newArray = num.concat(num2)
console.log(newArray)
console.log(num, newArray)

z = newArray.concat(num,num2,num3)
console.log(z, typeof z)

// sort() method

// alphabetically sorted as string

// let mn = [1,8,90,87,54,43,5,50,9]
// console.log(mn)
// mn.sort()
// console.log(mn)


// ascending order sorting
// let compare = (a,b) =>{
//   return a-b
// }
// let mn = [1,8,90,87,54,43,5,50,9]
// console.log(mn)
// mn.sort(compare)
// console.log(mn)

// descending order sorting
let compare = (a,b) =>{
  return b-a
}
let mn = [1,8,90,87,54,43,5,50,9]
console.log(mn)
mn.sort(compare)
console.log(mn)
