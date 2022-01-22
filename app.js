const selections = ['rock', 'paper', 'scissors'];
let computerSelection =
  selections[Math.floor(Math.random() * selections.length)];
let playerSelection = prompt('Rock, Paper, Scissors, SHOOT!').toLowerCase();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'rock') {
    return 'tie';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'loss';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'win';
  } else {
    console.log('Error');
  }
}
// console.log(playRound(playerSelection, computerSelection));

function game() {
  let wins = 0;
  let losses = 0;
  let round = 0;
  for (let i = 0; i < 5; i++) {
    if ((playRound = 'win')) {
      wins++, round++;
    } else if ((playRound = 'loss')) {
      losses++, round++;
    } else {
      ('tie');
    }
    console.log(round);
    console.log(wins);
    console.log(losses);
  }
}

console.log(game(playRound));
console.log(computerSelection);
console.log(playerSelection);
