function $(cssSelector) {
    return document.querySelector(cssSelector)
}

const modal = $(`#modal`)
const closeModal = $(`#playGame`)
const wins = $('#wins')
const ties = $('#ties')
const losses = $('#losses')
const game = $(`#Game`)
const resMsg = $(`#results`)
const restart = $(`#restart`)
const gridBoxes = $(`.grid-item`)
let username = document.getElementById('inputname');






closeModal.addEventListener('click', () => {
    username.innerText = document.getElementById("insrtname").value;
    modal.style.display = 'none';
    })


closeModal.addEventListener('click', () => {
modal.style.display = 'none';
})

const stats = {
    wins: 0,
    ties: 0,
    losses: 0,
}



// gridBoxes.addEventListener('click', moveMade)





restart.addEventListener('click', () => {
    resultScreen.style.display = 'none'
    game.style.display = 'block'
})


// class player {
//     constructor(name){
//         this.name = name 
//     }
// }
// const playerX = new player('')



let movesArr = [null, null, null, null, null, null, null, null, null]

// win if ...
// winningBoard = [
//     [0, 1, 2],
//     [0, 4, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 4, 6],
//     [2, 5, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ]


function play (){









    resultScreen.style.display = 'flex'

    wins.children[1].innerText = stats.wins
    ties.children[1].innerText = stats.ties
    losses.children[1].innerText = stats.losses
}