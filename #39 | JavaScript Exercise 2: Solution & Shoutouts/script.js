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
document.write(`CPU: ${cpu} and User ${user} : \n The winner is : ${result}`)