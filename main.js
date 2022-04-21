var pineapple = new Player(1, '🥥', 0)
var coconut = new Player(2,'🐚', 0)
var startGame = new Game(pineapple, coconut)

var header = document.querySelector('h1')
var clickSpot = document.querySelector('.board')





window.addEventListener('load', startGame)
clickSpot.addEventListener('click', showToken)



function startGame(){
  header.innerText = `It's ${startGame.currentPlayer.token}'s turn`
}

function showToken(event){
  startGame.chooseSpace(event.target.id)
  event.target.innerText = startGame.currentPlayer.token
}
