class Game {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.currentPlayer = player1;
    this.board = [
      '', '', '',
      '', '', '',
      '', '', ''
    ]
    this.countTurns = 0;
    this.hasBeenWon = false;
    this.draw = false;
    this.validTurn = false;
  }

  validatePlay(chosen) {
    for (var i = 0; i < this.board.length; i++) {
      if (i == [Number(chosen)] && this.board[i] !== this.players[0].token && this.board[i] !== this.players[1].token && !this.hasBeenWon){
        this.chooseSpace(i);
      }
    }
  }

  chooseSpace(i) {
    this.countTurns++;
    this.board.splice(i, 1, this.currentPlayer.token);
    this.validTurn = true;

    if (this.countTurns === 9) {
      this.itsADraw();
    } else if (this.countTurns >= 5){
      this.checkWinning();
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
      }
    }
  }

  itsADraw() {
    this.draw = true;
  }

  resetGame() {
    this.switchTurns();
    this.board = [
      '', '', '',
      '', '', '',
      '', '', ''
    ]
    this.countTurns = 0;
    this.hasBeenWon = false;
    this.draw = false;
  }

  switchTurns() {
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1]
    } else {
      this.currentPlayer = this.players[0]
    }
    this.validTurn = false;
  }
}
