/* 
Exercise 2 -  Snake Water Gun

Use js to create a game of snake water & Gun. 
The game should ask you to enter S, W, or G. 
The computer should be able to randomly generate S, W or G and
declare win or loss using alert use comfirm and prompt wherever required.

*/

let user = prompt("Enter S, W or G : ")
let cpuI = math.floor(math.random() * 3)
let cpu = ["S", "W","G"][cpuI]

const match = (cpu, user)=>{
  if (cpu == user){
    return "Nobody. match is tied."
  }else if(cpu == "S" && user == "W"){
    return "cpu"
  }else if(cpu == "S" && user == "G"){
    return "user"
  }
  else if(cpu == "G" && user == "W"){
    return "user"
  }else if(cpu == "G" && user == "S"){
    return "cpu"
  }else if(cpu == "W" && user == "S"){
    return "user"
  }else if(cpu == "w" && user == "G"){
    return "cpu"
  }
}
let result = match(cpu, user)
console.log("The winner is : " + result)