let wins = 0;
let losts = 0;
let draws = 0;


function playRound(playerSelection, computerSelection){
    if((playerSelection === 'Rock' && computerSelection === 'Rock') || (playerSelection === 'Paper' && computerSelection === 'Paper') || (playerSelection === 'Scissors' && computerSelection === 'Scissors')){
        draws++;
        // console.log(draws);
        return 'It\'s a draw!';
    } else if(playerSelection.toLowerCase() === 'Rock' && computerSelection === 'Paper'){
        losts++;
        // console.log(losts);
        return 'Paper beats Rock! Opponent wins!';
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        wins++;
        // console.log(wins);
        return 'Rock beats Scissors! You win!';
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        wins++;
        return 'Paper beats Rock! You win!';
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        losts++;
        return 'Scissors beats Paper! Opponent wins';
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
        losts++;
        return 'Rock beats Scissors! Opponent wins';
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        wins++;
        return 'Scissors beats Paper! You win!';
    }
    else return 'Invalid input';
}
let playerSelection = prompt('Choose Rock, Paper or Scissors');
// prompt('Choose Rock, Paper or Scissors');

let words = ['Rock', 'Paper', 'Scissors'];

const computerSelection = getComputerChoice();
function getComputerChoice(){
    return words[Math.random()*words.length | 0];
}

// console.log(playerSelection, computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(prompt('Choose Rock, Paper or Scissors'), getComputerChoice()));

    }
    
    if(wins > losts && wins > draws){
        return 'You won the game!';
    } else if(losts > wins && losts > draws){
        return 'You lost the game!'
    } else if(draws > wins && draws > losts){
        return 'You drawed the game!'
    }
}
console.log(game())