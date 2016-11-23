// anim.js
export default class Anim {

  constructor(players) {
    this.players = players;
    this.currentPlayer = 0;
    this.currentRoll = 0;
    this.bindUI();
    this.scoreSetup();
  }

  bindUI() {
    this.pins = document.querySelectorAll(".pins");
    this.ball = document.getElementById('ball');
    var ind = document.getElementById('ind');
    var next = document.getElementById('nextRound');
    ind.addEventListener("animationend", this.resetFrame.bind(this));
    next.addEventListener("click", this.turnLoop.bind(this));
  }

  scoreSetup() {
    for (let i = 0; i < this.players.length; i++) {
      var row = document.createElement("tr");
      row.id = "player"+i;
      document.getElementById('scoreTable').appendChild(row);
      var totalScore = document.createElement("td");
      totalScore.innerHTML = this.players[i].totalScore();
      document.getElementById('player' + i).appendChild(totalScore);
    }
  }

  rollBall() {
    this.ball.classList.add("bowling");
  }

  turnLoop() {
    this.scoreReveal();
    this.rollBall();
    this.nextTurn();
    this.nextPlayer();
  }

  scoreReveal() {
    var score = document.createElement("td");
    var playerEqualiser = Math.ceil((this.currentRoll+1)/this.players.length);
    score.innerHTML = this.players[this.currentPlayer].score[playerEqualiser-1];
    document.getElementById('player'+this.currentPlayer).appendChild(score);
  }

  nextPlayer() {
    if (this.currentPlayer + 1 === this.players.length) {
      this.currentPlayer = 0;
    } else {
      this.currentPlayer += 1;
    }
  }

  resetFrame() {
    for (var i = 0; i < this.pins.length; i++) {
      this.pins[i].classList.remove("knocked");
    }
    this.ball.classList.remove("bowling"); 
  }

  nextTurn() {
    var pinScore = this.players[this.currentPlayer].score[Math.round((this.currentRoll-1)/this.players.length)];
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
