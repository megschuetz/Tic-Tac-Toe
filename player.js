class Player {
  constructor(id, token, wins){
    this.id = id;
    this.token = token;
    this.wins = wins;
    this.won = false;
  }

  increaseWins(){
    this.wins++;
  }
}
