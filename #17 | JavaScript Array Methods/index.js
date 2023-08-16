let num = [1, 4,7, 9, 10]
console.log(num, typeof num)
// toString()
let b = num.toString()
console.log(b, typeof b)
// join()
let j = num.join("_")
console.log(j, typeof j)
// pop()
let p = num.pop()
console.log(p, num.pop(), num.pop(), num.pop(), num.pop(), num.pop())

// push()
console.log(num, typeof num)
num.push(1)
num.push(10)
num.push(175)
num.push(35)
console.log(num)

// copyWithin()
z = num.copyWithin()
console.log(z, typeof z)

// shift()
console.log(num)
s = num.shift()
console.log(s)
console.log(num,num.length)

// unshift()
us = num.unshift(7)
console.log(us) // it returns new length
console.log(num,num.length)

// delete
console.log(num)
delete num[0]
console.log(num)

// concat()
let a1 = [1,2,3]
let a2 = [3,4,5,6]
let a3 = [4,10,8,9]
console.log(a1.concat(a2,a3))

