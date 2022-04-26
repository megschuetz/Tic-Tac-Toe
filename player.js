class Player {
  constructor(id, token, wins){
    this.id = id;
    this.token = token;
    this.wins = wins;
  }

  increaseWins(){
    console.log('increases wint method')
    this.wins++;
  }
}
