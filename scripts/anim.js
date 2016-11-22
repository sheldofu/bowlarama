// anim.js
export default class Anim {

  constructor(players) {
    this.players = players;
    this.currentPlayer = 0;
    this.currentRoll = 0;
    this.bindUI();
  }

  bindUI() {
    this.pins = document.querySelectorAll(".pins");
    this.ball = document.getElementById('ball');
    var ind = document.getElementById('ind');
    var next = document.getElementById('nextRound');
    ind.addEventListener("animationend", this.resetFrame.bind(this));
    next.addEventListener("click", this.turnLoop.bind(this));
  }

  rollBall() {
    this.ball.classList.add("bowling");
    console.log(this.ball);
  }

  turnLoop() {
    this.scoreReveal();
    this.rollBall();
    this.nextTurn();
    this.nextPlayer();
  }

  scoreReveal() {
    console.log(this.players);
    var playerEqualiser = Math.round((this.currentRoll+1)/this.players.length); //change to number of players
    document.querySelector('.player' +this.currentPlayer+ ' td:nth-child('+(playerEqualiser)+')').innerHTML = this.players[this.currentPlayer].score[playerEqualiser-1]
  }

  nextPlayer() {
    if (this.currentPlayer + 1 === this.players.length) {
      this.currentPlayer = 0;
    } else {
      this.currentPlayer = this.currentPlayer + 1;
    }
  }

  resetFrame() {
    for (var i = 0; i < this.pins.length; i++) {
      this.pins[i].classList.remove("knocked");
    }
    this.ball.classList.remove("bowling"); 
  }

  nextTurn() {
    var pinScore = this.players[this.currentPlayer].score[Math.round(this.currentRoll/this.players.length)];
    this.currentRoll = this.currentRoll + 1;
    this.pinsKnocked(pinScore);
    if (pinScore === 0) {
      this.resetFrame();
    } 
  }

  pinsKnocked(pinCount) {
    for (var i = 0; i < pinCount; i++) {
      this.pins[i].classList.add("knocked");
    } 
  }
}
