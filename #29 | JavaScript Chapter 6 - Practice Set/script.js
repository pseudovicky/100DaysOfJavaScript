document.body.style.backgroundColor = "yellow"

let seeAgain = true

while(seeAgain){
age = parseInt(prompt("Enter your age: "))
if(age>=18){
  console.log("You can Drive!")
  document.backgroundColor("green")
}else if(age<=0){
  console.error("Invalid age!")
  document.style.color = "red"
}else if(age<4){
  location.href = "www.google.com"
}else{
  console.error("You can not Drive!")
  document.style.color = "red"
}
  seeAgain = confirm("Do you want to See the prompt again!")
}
