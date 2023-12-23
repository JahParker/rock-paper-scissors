function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];

  return choices[Math.floor(Math.random() * 3)];
}

// Don't optimize. Just see it through
function playRound(playerSelection) {
  let computerSelection = getComputerChoice()
  switch (playerSelection.toLowerCase()) {
    case 'rock':
      if (computerSelection == 'scissors') {
        result.textContent = `You win! :) ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
        playerScore++;
      } else if (computerSelection == 'paper') {
        result.textContent = `You lose! :( ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
        computerScore++;
      } else {
        result.textContent = `It's a draw! ${playerSelection.toUpperCase()} == ${computerSelection.toUpperCase()}`
      }
      break;
    case 'paper':
      if (computerSelection == 'rock') {
        result.textContent = `You win! :) ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
        playerScore++;
      } else if (computerSelection == 'scissors') {
        result.textContent = `You lose! :( ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
        computerScore++;
      } else {
        result.textContent = `It's a draw! ${playerSelection.toUpperCase()} == ${computerSelection.toUpperCase()}`
      }
      break;
    case 'scissors':
      if (computerSelection == 'paper') {
        result.textContent = `You win! :) ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
        playerScore++;
      } else if (computerSelection == 'rock') {
        result.textContent = `You lose! :( ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
        computerScore++;
      } else {
        result.textContent = `It's a draw! ${playerSelection.toUpperCase()} == ${computerSelection.toUpperCase()}`
      }
      break;
    default:
      result.textContent = "Uh.. Lets try this again. Type rock, paper, or scissors"
      break;
  }
  scoreboard.textContent = `Player: ${playerScore} | Computer: ${computerScore}`

  if (playerScore >= 5) {
    result.textContent = "Congrats! You beat the computer by getting to 5 points first"
    playerScore = 0;
    computerScore = 0;
    scoreboard.textContent = `Player: ${playerScore} | Computer: ${computerScore}`
  } else if (computerScore >= 5) {
    result.textContent = "Booooooo! The computer beat you by getting to 5 points first"
    playerScore = 0;
    computerScore = 0;
    scoreboard.textContent = `Player: ${playerScore} | Computer: ${computerScore}`
  }
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
const result = document.querySelector('#result')

game()