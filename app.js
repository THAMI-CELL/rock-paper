// Give the computer choices.
var choices = ["Rock", "Paper", "Scissor"];
var computerChoice;
var wins = 0;
var losses = 0;

//Display scores on page
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;

//Function allowes computer chooses R P or S.
function goComputer () {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);
  return computerChoice;
}

// Calling computer to make a move.
goComputer();

//When the Rock button is clicked ....
function userRock () {  
    
  if (computerChoice === choices[0]) {
    document.getElementById("message").innerHTML = "It's a tie!";
  }
  if (computerChoice === choices[1]) {
    losses++;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("message").innerHTML = "Paper covers Rock. You lose!";
  }
  if (computerChoice === choices[2]) {
    document.getElementsById("rock").setAttribute("class", "win");
    wins++;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("message").innerHTML = "Rock crushes Scissors. You win!";
  }
   
  goComputer ();
}

//When the Paper button is clicked ....
function userPaper (id) {  
  
  if (computerChoice === choices[1]) {
    document.getElementById("message").innerHTML = "It's a tie!"; 
  }
  if (computerChoice === choices[2]) {
    losses++;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("message").innerHTML = "Scissor cuts Paper. You lose!";
  }
  if (computerChoice === choices[0]) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("message").innerHTML = "Paper covers Rock. You win!";
  }
  
  goComputer();
}

//When the Scissor button is clicked ....
function userScissor (id) {  
  
  if (computerChoice === choices[2]) {
    document.getElementById("message").innerHTML = "It's a tie!"; 
  }
  if (computerChoice === choices[0]) {
    losses++;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("message").innerHTML = "Rock crushes Scissor. You lose!";
  }
  if (computerChoice === choices[1]) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("message").innerHTML = "Scissor cuts Paper. You win!";
  }
  
  goComputer ();
}