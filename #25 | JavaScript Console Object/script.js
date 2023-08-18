console.log(console)
console.error("Hey this is an Error!")
console.assert(5 > 55)
console.assert(0 != false)
obj = {
  a: 1,
  a1: 2,
  a2: 3,
  a3: 4,
}
console.table(obj)
console.warn("This is a warning!")
console.info("info")

console.time("a")
console.timeEnd("a")

console.time("forloop")
for (let i = 0; i < 10; i++) {
  console.log(233)
}
console.timeEnd("forloop")

console.time("whileloop")
let i = 0
while (i < 10) {
  console.log(233)
  i++;
}
console.timeEnd("whileloop")