# Chapter 4 - Strings

Strings are used to store manipulate text. string can be created using the following syntax.

let name = "Vicky"

### Template Literals

Template literals are backtics instead of quotes to define a string.

let name = "vicky"

With template literals it is possible to use both single as well as double quotes inside a string

let sentance = ` The name "is" Vicky's `
(``) backtick    ("") double quotes   (') single quote

we can insert variables directly in template literal. This is called string interpolation  
let a = `This is a ${name}`
print - This is a vicky

### Escape sequence characters 

If you try to print the following string, javascript will misunderstand it.
  let name = `Mr's vicky Kumar`

we can use single quote escape sequence to solve the problem
let name = 'Mr\'s Vicky Kumar'

Similarly we can use \" inside a string with double quotes"
let name = "Mr\"s Vicky Kumar"

Other escape sequence characters are as follows 

\n = newline
\t = tab
\r = carriage return
