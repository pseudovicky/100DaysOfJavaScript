/* 
Exercise 1 - Guess The Number:-

Write a js program to genrate a random number and store it ina  random variable. The program then taken an input from the user to tell them whether the guess was correct, greater or lower than the original number.
100 - (no of guesses) is the score of the user. The program is expected to terminate once the number is guessed, Number should be between 1-100.
*/

function checkAnswer(guess, answer, turns){
    if(guess>answer){
      console.log("too high")
      return turns - 1 
    }else if(guess<answer){
      console.log("too low!")
      return turns - 1
    }else{
      console.log(`You got it! The answer was ${answer}`)
    }
  }
  
  function game(){
    // choosing a random between 1 to 100.
    console.log("Welcome, To the Number Guessing Game!")
    console.log("I'm thinking of a number between 1 and 100.");
    const answer = Math.floor(Math.random() * 100)
    // const answer = 20
    let turns = 10
    let guess = 0
    while(guess != answer){
      console.log(`You have ${turns} attemps remaining to guess the number.`)
      guess = parseInt(prompt("Make a guess: "))
      turns = checkAnswer(guess, answer, turns)
      if(turns == 0){
        console.log("You've run out of gusses, you lose.")
      }else{
        console.log("Guess again!")
      }
    }
  }
  
  game()
  