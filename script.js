const playerSelection = 'Rock';
let words = ['Rock', 'Paper', 'Scissors'];

const computerSelection = function getComputerChoice(){
    return words[Math.random()*words.length | 0];
}
