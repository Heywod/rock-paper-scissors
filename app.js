const images = Array.from(document.querySelectorAll('.card-image'));
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const message = document.querySelector('.message');

let playerScore = 0;
let computerScore = 0;

//Game Start when image is clicked
images.forEach((image) =>
  image.addEventListener('click', () => {
    if (playerScore >= 5 || computerScore >= 5) {
      return;
    }
    game(image.dataset.image);
  })
);

//Game

//Computers Selection
function computerPick() {
  const selections = ['rock', 'paper', 'scissors'];
  let computerGuess = selections[Math.floor(Math.random() * selections.length)];
  return computerGuess;
}

function playRound(playerSelection, computerSelection) {
  let log = '';
  if (playerSelection === 'Rock') {
    if (computerSelection === 'paper') {
      log = 'You lost. Paper beats Rock';
    } else if (computerSelection === 'scissors') {
      log = 'You won! Rock beats Scissors!';
    } else {
      log = 'Its a tie!';
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'scissors') {
      log = 'You lost. Scissors beats Paper';
    } else if (computerSelection === 'rock') {
      log = 'You won! Paper beats Rock!';
    } else {
      log = 'Its a tie!';
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'rock') {
      log = 'You lost. Rock beats Scissors';
    } else if (computerSelection === 'paper') {
      log = 'You won! Scissors beats Paper!';
    } else {
      log = 'Its a tie!';
    }
  }
  return log;
}

function game(playerSelect) {
  let playerSelection = capitalize(playerSelect);
  let computerSelection = computerPick();

  let roundResult = playRound(playerSelection, computerSelection);

  if (roundResult.search('won') > -1) {
    playerScore++;
  } else if (roundResult.search('lost') > -1) {
    computerScore++;
  }
  scorePlayer.textContent = playerScore;
  scoreComputer.textContent = computerScore;
  message.textContent = roundResult;

  if (playerScore >= 5 && computerScore < 5) {
    message.textContent = 'Game Over! You Won!';
  } else if (playerScore < 5 && computerScore >= 5) {
    message.textContent = 'Game Over. You Lost.';
  }
}

//Helper Functions

function capitalize(string) {
  return string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}
