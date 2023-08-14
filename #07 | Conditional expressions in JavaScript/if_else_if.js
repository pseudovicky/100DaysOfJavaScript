const name = prompt("Enter your Good name please : ")
age = parseInt(prompt("What is your Age? "))

if(age>0 && age<10){
    console.log("You are akid")
}else if(age>10 && age<18){
    console.log("You are a teenager.")
}else if(age>=18){
    console.log("You are adult.")
}else{
    console.log("Invalid age.")
}