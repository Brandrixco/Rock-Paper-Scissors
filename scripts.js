let humanScore = 0; 
let computerScore = 0; 

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    let playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return playerChoice; 
}

function playRound(humanSelection, computerSelection){
    if (humanSelection === computerSelection){
        return "It's a tie!";
    }
    else if ((humanSelection === 'rock' && computerSelection === 'scissors') ||
             (humanSelection === 'paper' && computerSelection === 'rock') ||
             (humanSelection === 'scissors' && computerSelection === 'paper')){
        humanScore++;
        return `You win! ${humanSelection} beats ${computerSelection}.`;
    }
    else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${humanSelection}.`;
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice())); 
console.log(playRound(getHumanChoice(), getComputerChoice())); 
console.log(playRound(getHumanChoice(), getComputerChoice())); 
console.log(playRound(getHumanChoice(), getComputerChoice())); 
console.log(playRound(getHumanChoice(), getComputerChoice())); 

console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
if (humanScore > computerScore){
    console.log("Congratulations! You are the overall winner!");
} else if (computerScore > humanScore){
    console.log("Sorry! The computer is the overall winner!");
} else {
    console.log("It's an overall tie!");
}