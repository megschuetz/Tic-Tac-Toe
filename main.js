var header = document.querySelector('h1')
var clickSpot = document.querySelector('.board')
var coco = document.querySelector('.coconut-wins')
var shell = document.querySelector('.shell-wins')



window.addEventListener('load', whosTurn)
clickSpot.addEventListener('click', showToken)


var coconut = new Player(1, '🥥', 0)
var shell = new Player(2,'🐚', 0)
var game = new Game(coconut, shell)

function whosTurn() {
  header.innerText = `It's ${game.currentPlayer.token}'s turn`
}


function showToken(event){
  game.chooseSpace(event.target.id)
  event.target.innerHTML = `<p>${game.currentPlayer.token}</p>`
  console.log(game.currentPlayer.won);
  displayWinner();
}

function displayWinner() {
  if (game.hasBeenWon === true && game.currentPlayer.id === 1) {
    header.innerText = `Player ${game.currentPlayer.token} Won!`;
    coco.innerText = `${game.currentPlayer.wins} Wins`;
  } else if (game.hasBeenWon === true && game.currentPlayer.id === 2) {
    header.innerText = `Player ${game.currentPlayer.token} Won!`;
    shell.innerText = `${game.currentPlayer.wins} Wins`;
  } else {
    switchAndStart();
  }
}


function switchAndStart() {
  game.switchTurns();
  whosTurn();
}
