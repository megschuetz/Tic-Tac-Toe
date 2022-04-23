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
  }



  chooseSpace(choosen) {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i] == choosen){
        this.board.splice(i, 1, this.currentPlayer.token)
      }
    }
    console.log('before' ,this.currentPlayer.wins);
    this.countTurns++;
    if (this.countTurns >= 5){
      this.checkForWinning();
    }
  }




  checkForWinning() {
    var winningKeys = [
      this.board[0] && this.board[1] && this.board[2] === this.currentPlayer.token,
      this.board[3] && this.board[4] && this.board[5] === this.currentPlayer.token,
      this.board[6] && this.board[7] && this.board[8] === this.currentPlayer.token,
      this.board[0] && this.board[3] && this.board[6] === this.currentPlayer.token,
      this.board[1] && this.board[4] && this.board[7] === this.currentPlayer.token,
      this.board[2] && this.board[5] && this.board[8] === this.currentPlayer.token,
      this.board[0] && this.board[4] && this.board[8] === this.currentPlayer.token,
      this.board[2] && this.board[4] && this.board[6] === this.currentPlayer.token,
    ]


    for (var i = 0; i < winningKeys.length; i++) {
      if (winningKeys[i]) {
        console.log(winningKeys[i]);
        this.currentPlayer.increaseWins();
      }
    }
    console.log('after' ,this.currentPlayer.wins);
  }

  switchTurns(){

    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1]
    } else {
      this.currentPlayer = this.players[0]
    }
  }
}


//after one player has 3 turns check if winning ==> have a counter in the constructor
