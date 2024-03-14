// setInterval(()=>{
//     let date = new Date();

// let options = {
//     weekday: "long", year: "numeric", month: "short",
//     day: "numeric", hour: "2-digit", minute: "2-digit"
// };
// let d = date.toLocaleTimeString("en-us", options);
// time.innerHTML = d
// }, 1000)

function getDateTime(){
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    if(month.toString().length == 1){
        month = "0"+month;
    }
    if(day.toString().length == 1){
        day = "0"+day;
    }
    if(minute.toString().length == 1){
        minute = "0"+minute;
    }
    if(second.toString().length == 1){
        second = "0"+second;
    }
    let dateTime = year+"/"+month+"/"+day+"  "+hour+":"+minute+":"+second;
    return dateTime;
}

setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("time").innerHTML = currentTime;
}, 1000);