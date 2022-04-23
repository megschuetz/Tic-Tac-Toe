var header = document.querySelector('h1')
var clickSpot = document.querySelector('.board')





window.addEventListener('load', whosTurn)
clickSpot.addEventListener('click', showToken)


var coconut = new Player('coco', '🥥', 0)
var shell = new Player('shell','🐚', 0)
var startGame = new Game(coconut, shell)

function whosTurn() {
  header.innerText = `It's ${startGame.currentPlayer.token}'s turn`
}


function showToken(event){
  startGame.chooseSpace(event.target.id)
  event.target.innerHTML = `<p>${startGame.currentPlayer.token}</p>`
  displayWinner();
}

function displayWinner() {

  switchAndStart();
}


function switchAndStart() {
  startGame.switchTurns();
  whosTurn();
}
