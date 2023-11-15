function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];

  return choices[Math.floor(Math.random() * 3)];
}

// Don't optimize. Just see it through
function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case 'rock':
      if (computerSelection == 'scissors') {
        return `You win! :) ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
      } else if (computerSelection == 'paper') {
        return `You lose! :( ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
      } else {
        return `It's a draw! ${playerSelection.toUpperCase()} == ${computerSelection.toUpperCase()}`
      }
      break;
    case 'paper':
      if (computerSelection == 'rock') {
        return `You win! :) ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
      } else if (computerSelection == 'scissors') {
        return `You lose! :( ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
      } else {
        return `It's a draw! ${playerSelection.toUpperCase()} == ${computerSelection.toUpperCase()}`
      }
      break;
    case 'scissors':
      if (computerSelection == 'paper') {
        return `You win! :) ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
      } else if (computerSelection == 'rock') {
        return `You lose! :( ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
      } else {
        return `It's a draw! ${playerSelection.toUpperCase()} == ${computerSelection.toUpperCase()}`
      }
      break;
    default:
      return "Uh.. Lets try this again. Type rock, paper, or scissors"
      break;
  }
}

function game() {
  let computerChoice;
  let playerChoice;
  for (i = 0; i < 5; i++) {
    playerChoice = prompt("Type rock, paper, or scissors", "");
    computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
  }
}

game()