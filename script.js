// To make rock paper scissors, I need to be able to press a button and get a result based on the computer's choice.
function result(playerChoice) {
  let choices = ['rock', 'paper', 'scissors']
  let computerChoice = choices[Math.floor(Math.random() * 3)]
  console.log(computerChoice);

  // Hey, you're trying to optimize again. We can come back to this later, buddy. Lets just start with something that works.
  switch (playerChoice) {
    case 'rock':
      if (computerChoice == 'scissors') {
        console.log('You win! :^)')
      } else if (playerChoice == computerChoice) {
        console.log('It\'s a draw! :^|');
      } else {
        console.log('You lose :^(')
      }
      break;
    case 'paper':
      break;
    case 'scissors':
      break;
    default:
      console.log("Oh noo... This can't be!")
      break;
  }
}

result('rock')