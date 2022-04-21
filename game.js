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

    //should maybe be global variables - why didnt this work -
    // this.winningKeys = [
    //   this.board[0,1,2].includes(this.currentPlayer.token),
    //   this.board[3,4,5].includes(this.currentPlayer.token),
    //   this.board[6,7,8].includes(this.currentPlayer.token),
    //   this.board[0,3,6].includes(this.currentPlayer.token),
    //   this.board[1,4,7].includes(this.currentPlayer.token),
    //   this.board[2,5,8].includes(this.currentPlayer.token),
    //   this.board[0,4,8].includes(this.currentPlayer.token),
    //   this.board[2,4,6].includes(this.currentPlayer.token),
    // ]
  }



  chooseSpace(choosen) {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i] == choosen){
        this.board.splice(i, 1, this.currentPlayer.token)
      }
    }

    this.countTurns++;
    if (this.countTurns >= 5){
      this.checkForWinning();
    }
  }




  checkForWinning() {
    var winningKeys = [
      this.board[0,1,2].includes(this.currentPlayer.token),
      this.board[3,4,5].includes(this.currentPlayer.token),
      this.board[6,7,8].includes(this.currentPlayer.token),
      this.board[0,3,6].includes(this.currentPlayer.token),
      this.board[1,4,7].includes(this.currentPlayer.token),
      this.board[2,5,8].includes(this.currentPlayer.token),
      this.board[0,4,8].includes(this.currentPlayer.token),
      this.board[2,4,6].includes(this.currentPlayer.token),
    ]


    for (var i = 0; i < winningKeys.length; i++) {
      if (winningKeys[i]) {
        console.log('Winner winner chicken dinner!!')
      }
    }
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
