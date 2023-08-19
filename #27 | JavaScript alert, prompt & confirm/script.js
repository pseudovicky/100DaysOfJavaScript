// alert("Hey, your script works")

alert("Enter the value of a!")
let a = prompt("Enter a here: ","100") // 100 is default value
a = Number.parseInt(a)
// document.write(a)
alert("You entered a of type " + (typeof a))
let write = confirm("Do you want to write it to the page")
if(write){
  document.write(a)
}else{
  document.write("Please allow me to write !")
}
