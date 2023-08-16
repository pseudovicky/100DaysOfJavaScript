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

let mn = [1,8,90,87,54,43,5,50,9]
console.log(mn)
mn.sort()
console.log(mn)


// ascending order sorting
let compare = (a,b) =>{
  return a-b
}
let dn = [1,8,90,87,54,43,5,50,9]
console.log(dn)
dn.sort(compare)
console.log(dn)

// descending order sorting
// let compare = (a,b) =>{
//   return b-a
// }
let pn = [1,8,90,87,54,43,5,50,9]
console.log(pn)
pn.sort(compare)
console.log(pn)

let d = [9,5,87,34,2,45]
console.log(d)
d.reverse()
console.log(d)

// Splice 

let nums = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let deletedValues = nums.splice(2,3,1021,1022,1023,1024,34578)
console.log(nums)
console.log(deletedValues, typeof deletedValues)

// slice

let a = [10,20,30,40,100,80,30]
g = a.slice(3) // index 3 to end
console.log(g)
k = a.slice(1,4) // index 1 to 4
console.log(k)
console.log(a)
