// Variables to display the result
let wins = 0;
let losts = 0;
let draws = 0;

// Outcome variables
let rock = 'ROCK';
let paper = 'PAPER';
let scissors = 'SCISSORS';

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', (e) => {
    console.log(playRound(e.target.id.toUpperCase(), getComputerChoice()))
});

paperBtn.addEventListener('click', (e) => {
    console.log(playRound(e.target.id.toUpperCase(), getComputerChoice()))
});

scissorsBtn.addEventListener('click', (e) => {
    console.log(playRound(e.target.id.toUpperCase(), getComputerChoice()))
});

// Play one round. Conditions for win, draw and lose outcomes.
function playRound(playerSelection, computerSelection) {
    console.log(`You chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    if ((playerSelection === `${rock}` && computerSelection === `${rock}`) || 
        (playerSelection === `${paper}` && computerSelection === `${paper}`) || 
        (playerSelection === `${scissors}` && computerSelection === `${scissors}`)) {
        draws++;
        return `It\'s a draw! Current result is Player : ${wins} Computer : ${losts}`;
    } else if (playerSelection === `${rock}` && computerSelection === `${paper}`) {
        losts++;
        return `Paper beats Rock! Current result is Player : ${wins} Computer : ${losts}`;
    } else if (playerSelection === `${rock}` && computerSelection === `${scissors}`) {
        wins++;
        return `Rock beats Scissors! Current result is Player : ${wins} Computer : ${losts}`;
    } else if (playerSelection === `${paper}` && computerSelection === `${rock}`) {
        wins++;
        return `Paper beats Rock! Current result is Player : ${wins} Computer: ${losts}`;
    } else if (playerSelection === `${paper}` && computerSelection === `${scissors}`) {
        losts++;
        return `Scissors beats Paper! Current result is Player : ${wins} Computer: ${losts}`;
    } else if (playerSelection === `${scissors}` && computerSelection === `${rock}`) {
        losts++;
        return `Rock beats Scissors! Current result is Player : ${wins} Computer : ${losts}`;
    } else if (playerSelection === `${scissors}` && computerSelection === `${paper}`) {
        wins++;
        return `Scissors beats Paper! Current result is Player : ${wins} Computer : ${losts}`;
    }
    else if (playerSelection !== `${rock} || playerSelection !== ${paper} || playerSelection !== ${scissors}`){
        losts++;
        return `Invalid input. You lost. Be careful! Current result is Player : ${wins} Computer : ${losts}`;
    } else return 'What?'
}

const getPlayerChoice = function () {
    // Save answer to a variable
    let playerSelection = prompt('Choose Rock, Paper or Scissors');
    playerSelection = playerSelection.toUpperCase();
    return playerSelection;
}

let words = ['Rock', 'Paper', 'Scissors'];

const computerSelection = getComputerChoice();
//Randomly select a word 
function getComputerChoice() {
    return words[Math.random() * words.length | 0].toUpperCase();
}
// Play multiple games
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
// Three outcome conditions
    if (wins > losts ) {
        return `You won the game! Final result is Player : ${wins} Computer : ${losts}`;
    } else if (losts > wins) {
        return `You lost the game! Final result is Player : ${wins} Computer : ${losts}`
    } else {
        return `You drawed the game! Final result is Player : ${wins} Computer : ${losts}`
    }
}
// console.log(game());