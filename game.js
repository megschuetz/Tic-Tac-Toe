class Game {
  constructor(player1, player2){
    this.players = [player1, player2];
    this.currentPlayer = player1;
    this.board = [
      '0', '1', '2',
      '3', '4', '5',
      '6', '7', '8'
    ]
    this.numOfTurnsPlayed = 0;

  }

  chooseSpace(choosen){
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i] == choosen){
        this.board.splice(i, 1, this.currentPlayer.token)
      }
    }
  }

  recordBoxClicked(){

  }

  switchTurns(){
    console.log(this.players[1]);
    this.currentPlayer = this.players[1];
  }
}


//after one player has 3 turns check if winning ==> have a counter in the constructor
