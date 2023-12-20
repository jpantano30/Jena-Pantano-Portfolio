//constants
function $(cssSelector) {
    return document.querySelector(cssSelector)
};
// 1. global variables 
const modal = $(`#modal`);
const closeModal = $(`#playGame`);
const p1wins = $('#p1wins');
const ties = $('#ties');
const p2wins = $('#p2wins');
const resMsg = $(`#gameovermsg`);

let players = document.getElementById('inputname');
const restart = document.getElementById('restart');

const LOOKUP = {
    '1': 'X', 
    '-1':'O'
};

const winningCombos = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let board;
let turn;
let winner;



//caches dom elements 
const boardEl = document.getElementById('game-board')


//event listeners 
closeModal.addEventListener('click', () => {
    players.innerText = `Player 1: ${document.getElementById("insrtname1").value} vs. Player 2: ${document.getElementById("insrtname2").value}`;
    players.style.textAlign = 'center'
    modal.style.display = 'none';
    });
boardEl.addEventListener('click', handleClick);
restart.addEventListener('click', init);

//functions 
init();
function init(){
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
};

function handleClick(event){
    console.log(event.target) 
    //another player cant make changes to box thats already been clicked 
    if (board[parseInt(event.target.id)] || winner) return;
    //next players turn 
    board[parseInt(event.target.id)] = turn;
    turn *= -1;
    console.log(board);
    winner = checkWinner();
    render()
};
function render() {
    //if anything in board thats changed, i want to render the box
    //subfunctions - updatefunction
    for (let i = 0; i < board.length; i++) {
        if(board[i]) {
            const sq = document.getElementById(i);
            sq.innerHTML = `${LOOKUP[board[i]]}`;
        }
    }
};
function checkWinner (){
    for (let i = 0; i < winningCombos.length; i++){
        sum = Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]);
        if (sum === 3) {
            return board[winningCombos[i][0]];
        }
    }
    if (!board.includes(null)) {
         return 'Tie';
    }
    return null;
};
