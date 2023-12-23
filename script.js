function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];

  return choices[Math.floor(Math.random() * 3)];
}

// Don't optimize. Just see it through
function playRound(playerSelection) {
  const result = document.querySelector('#result')
  let computerSelection = getComputerChoice()
  
  switch (playerSelection.toLowerCase()) {
    case 'rock':
      if (computerSelection == 'scissors') {
        result.textContent = `You win! :) ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
      } else if (computerSelection == 'paper') {
        result.textContent = `You lose! :( ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
      } else {
        result.textContent = `It's a draw! ${playerSelection.toUpperCase()} == ${computerSelection.toUpperCase()}`
      }
      break;
    case 'paper':
      if (computerSelection == 'rock') {
        result.textContent = `You win! :) ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
      } else if (computerSelection == 'scissors') {
        result.textContent = `You lose! :( ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
      } else {
        result.textContent = `It's a draw! ${playerSelection.toUpperCase()} == ${computerSelection.toUpperCase()}`
      }
      break;
    case 'scissors':
      if (computerSelection == 'paper') {
        result.textContent = `You win! :) ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
      } else if (computerSelection == 'rock') {
        result.textContent = `You lose! :( ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
      } else {
        result.textContent = `It's a draw! ${playerSelection.toUpperCase()} == ${computerSelection.toUpperCase()}`
      }
      break;
    default:
      result.textContent = "Uh.. Lets try this again. Type rock, paper, or scissors"
      break;
  }
  
}

function test() {
  console.log("this is a test");
}

function game() {
  scoreboard.textContent = `Player: ${playerScore} | Computer: ${computerScore}`
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    const playerChoice = button.value;
    button.addEventListener('click', () => {playRound(playerChoice)});
  });
}
let playerScore = 0;
let computerScore = 0;
const scoreboard = document.querySelector('#score');

game()