let wins = 0;
let losts = 0;
let draws = 0;

function playRound(playerSelection, computerSelection) {
    console.log(`You chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    if ((playerSelection === 'ROCK' && computerSelection === 'ROCK') || (playerSelection === 'PAPER' && computerSelection === 'PAPER') || (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS')) {
        draws++;
        return `It\'s a draw! Current result is Player : ${wins} Computer : ${losts}`;
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        losts++;
        return `Paper beats Rock! Current result is Player : ${wins} Computer : ${losts}`;
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        wins++;
        return `Rock beats Scissors! Current result is Player : ${wins} Computer : ${losts}`;
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        wins++;
        return `Paper beats Rock! Current result is Player : ${wins} Computer: ${losts}`;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        losts++;
        return `Scissors beats Paper! Current result is Player : ${wins} Computer: ${losts}`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        losts++;
        return `Rock beats Scissors! Current result is Player : ${wins} Computer : ${losts}`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        wins++;
        return `Scissors beats Paper! Current result is Player : ${wins} Computer : ${losts}`;
    }
    else return 'Invalid input';
}

const getPlayerChoice = function () {
    let playerSelection = prompt('Choose Rock, Paper or Scissors');
    playerSelection = playerSelection.toUpperCase();
    return playerSelection;
}

let words = ['Rock', 'Paper', 'Scissors'];

const computerSelection = getComputerChoice();

function getComputerChoice() {
    return words[Math.random() * words.length | 0].toUpperCase();
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }

    if (wins > losts && wins > draws) {
        return `You won the game! Final result is Player : ${wins} Computer : ${losts}`;
    } else if (losts > wins && losts > draws) {
        return `You lost the game! Final result is Player : ${wins} Computer : ${losts}`
    } else if (draws > wins && draws > losts) {
        return `You drawed the game! Final result is Player : ${wins} Computer : ${losts}`
    }
}
console.log(game());