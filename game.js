class Game {
  constructor(player1, player2){
    this.players = [player1, player2];
    this.currentPlayer = player1;
    this.board = [
      '0', '1', '2',
      '3', '4', '5',
      '6', '7', '8'
    ]
    this.countTurns = 0;
    this.hasBeenWon = false;
    this.draw = false;
  }



  chooseSpace(choosen) {
    this.countTurns++;
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i] == choosen){
        this.board.splice(i, 1, this.currentPlayer.token)
      }
    }

    if (this.countTurns >= 5){
      this.checkWinning();
    }

    if (this.countTurns === 9){
      this.itsADraw();
    }
  }




  checkWinning() {
    var winningKeys = [
      this.board[0] === this.currentPlayer.token && this.board[1] === this.currentPlayer.token && this.board[2] === this.currentPlayer.token,
      this.board[3] === this.currentPlayer.token && this.board[4] === this.currentPlayer.token && this.board[5] === this.currentPlayer.token,
      this.board[6] === this.currentPlayer.token && this.board[7] === this.currentPlayer.token && this.board[8] === this.currentPlayer.token,
      this.board[0] === this.currentPlayer.token && this.board[3] === this.currentPlayer.token && this.board[6] === this.currentPlayer.token,
      this.board[1] === this.currentPlayer.token && this.board[4] === this.currentPlayer.token && this.board[7] === this.currentPlayer.token,
      this.board[2] === this.currentPlayer.token && this.board[5] === this.currentPlayer.token && this.board[8] === this.currentPlayer.token,
      this.board[0] === this.currentPlayer.token && this.board[4] === this.currentPlayer.token && this.board[8] === this.currentPlayer.token,
      this.board[2] === this.currentPlayer.token && this.board[4] === this.currentPlayer.token && this.board[6] === this.currentPlayer.token,
    ]


    for (var i = 0; i < winningKeys.length; i++) {
      if (winningKeys[i]) {
        this.currentPlayer.increaseWins();
        this.hasBeenWon = true;
        // this.resetGame();
      }
    }
  }

  itsADraw() {
    this.draw = true;
    // this.resetGame();
  }

  resetGame() {
    this.switchTurns();
    this.board = [
      '0', '1', '2',
      '3', '4', '5',
      '6', '7', '8'
    ]
    this.countTurns = 0;
    this.hasBeenWon = false;
    this.draw = false;
  }

  switchTurns(){
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1]
    } else {
      this.currentPlayer = this.players[0]
    }
  }
}
