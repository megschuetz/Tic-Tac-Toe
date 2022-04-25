var header = document.querySelector('h1')
var clickSpot = document.querySelector('.board')
var coco = document.querySelector('.coconut-wins')
var shelly = document.querySelector('.shell-wins')
var wholeBoard = document.querySelector('.grid-item one')



window.addEventListener('load', whosTurn)
clickSpot.addEventListener('click', showToken)



var coconut = new Player(1, '🥥', 0)
var shell = new Player(2,'🐚', 0)
var game = new Game(coconut, shell)

function displayPause() {
  var waitTime = setTimeout(resetAndPlay, 4000)
}

function whosTurn() {
  header.innerText = `It's ${game.currentPlayer.token}'s turn`
}


function showToken(event){
  game.chooseSpace(event.target.id)
  event.target.innerHTML = `<p>${game.currentPlayer.token}</p>`
  console.log(game.currentPlayer.won);
  checkScore();
}

function checkScore() {
  if (game.hasBeenWon === true) {
    displayWinner();
    displayPause();
  } else if (game.draw) {
    displayDraw();
    displayPause();
  } else {
    switchAndStart();
 }
}

function displayWinner() {
  if (game.currentPlayer.id === 1) {
    header.innerText = `Player ${game.currentPlayer.token} Won!`;
    coco.innerText = `${game.currentPlayer.wins} Wins`;
  } else if (game.currentPlayer.id === 2) {
    header.innerText = `Player ${game.currentPlayer.token} Won!`;
    shelly.innerText = `${game.currentPlayer.wins} Wins`;
  }
}


function displayDraw() {
  header.innerText = 'It\s a draw!'
}


function resetAndPlay(){
  game.resetGame();
  console.log('reset yes');
  clickSpot.innerHTML =
  `<div class="grid-item one" id='0'></div>
  <div class="grid-item two" id='1'></div>
  <div class="grid-item three" id='2'></div>
  <div class="grid-item four" id='3'></div>
  <div class="grid-item five" id='4'></div>
  <div class="grid-item six" id='5'></div>
  <div class="grid-item seven" id='6'></div>
  <div class="grid-item eight" id='7'></div>
  <div class="grid-item nine" id='8'></div>`
  whosTurn();
}


function switchAndStart() {
  game.switchTurns();
  whosTurn();
}
