//constants
function $(cssSelector) {
    return document.querySelector(cssSelector)
};

const modal = $(`#modal`);
const closeModal = $(`#playGame`);
const pOneWins = $('#p1wins h1');
const ties = $('#ties h1');
const pTwoWins = $('#p2wins h1');
const resMsg = $(`#gameovermsg`);

let players = document.getElementById('inputname');
let playerOneName = document.getElementById('plone');
let playerTwoName = document.getElementById('pltwo');
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
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];
let board;
let turn;
let winner;
let playerOneScore = 0
let playerTwoScore = 0
let tie = 0

const boardEl = document.getElementById('game-board')


//event listeners 
closeModal.addEventListener('click', () => {
    players.innerText = `Player 1 = X: ${document.getElementById("insrtname1").value} 
    vs.
    Player 2 = O: ${document.getElementById("insrtname2").value}`;
    players.style.textAlign = 'center';
    playerOneName.innerText = `${document.getElementById("insrtname1").value}`;
    playerTwoName.innerText = `${document.getElementById("insrtname2").value}`;
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
    render();
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
            const sq = document.getElementById(i);
            sq.innerHTML = board[i] ? `${LOOKUP[board[i]]}` : '';
    } 
    if (winner === 'Tie') {
        resMsg.innerText = "It's a tie";
        ties.innerText = `${tie}`;
    }
    if (winner === 1 || winner === -1) {
    resMsg.innerText = `${LOOKUP[winner]} Wins! Would you like to play again?`;
    pOneWins.innerText = `${playerOneScore}`;
    pTwoWins.innerText = `${playerTwoScore}`;
    }
};
function checkWinner (){
    for (let i = 0; i < winningCombos.length; i++){
        sum = Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]);
        if (sum === 3) {
            if (board[winningCombos[i][0]] === 1) playerOneScore += 1;
            if (board[winningCombos[i][0]] === -1) playerTwoScore += 1;
            return board[winningCombos[i][0]];
        }
    }
    if (!board.includes(null)) {
        tie += 1;
         return 'Tie';
    }
    return null;
};
