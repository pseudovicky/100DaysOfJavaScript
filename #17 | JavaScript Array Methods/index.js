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


console.log(num)
