// Solution 2:-
const city = prompt("Enter your city name to know your state name: ")

switch(city){
    case 'patna':
        console.log("Your state is bihar.");
        break;
    case 'ranchi':
        console.log("Your state is Jharkhand.");
        break;
    case 'mumbai':
        console.log("Your state is maharastra.");
        break;
    case 'pune':
        console.log("Your state is maharastra.");
        break;
    case 'gaya':
        console.log("Your state is Bihar.");
        break;
    case 'ayodhya':
        console.log("Your state is uttar pradesh.");
        break;
    case 'bhagalpur':
        console.log("Your state is bihar.");
        break;
    default:
        console.log("This is city is not available in our DataBase.")
}