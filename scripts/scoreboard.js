import Player from "./player";

// scoreboard.js
export default class Game {
  
  constructor(players) {
  	this.players = [];
    this.currentPlayer = 0;
    for (let i=0; i < players; i++){
    	this.players[i] = new Player('Player ' + i); 
    }
    this.totalFrames = 10; 
  }

  start() {
  	for (var i = 0; i < this.totalFrames * this.players.length; i++) { 	
  		 	this.takeFrame();
        this.nextPlayer();
	  }
    this.lastFrame();
    return this.players;
  }

  nextPlayer() {
    if (this.currentPlayer + 1 === this.players.length) {
      this.currentPlayer = 0;
    } else {
      this.currentPlayer += 1;
    }
  }

  lastFrame() {
    //last frame
    this.players.forEach((player, cur) => {
        let i = player.score.length - 1;
        this.currentPlayer = cur;
        //if players last frame adds up to 10, roll ball again
        if (player.score[i] + player.score[i-1] === 10) {
          this.rollBallRandom(10);
        }
        //if players penultimate score is 10, roll ball (will already have been rolled again)
        if (player.score[i-1] === 10) {
          this.rollBallRandom(10);
        }
        player.finalScore();
    });
  }

  rollBallX(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      this.rollBallRandom(pins);
    }
  }

  rollBall(pins) {
    this.players[this.currentPlayer].addScore(pins);
  }

  rollBallRandom(remainingPins) {
    var pins = Math.round(Math.random() * remainingPins);
  	this.rollBall(pins);
    return pins;
  }

  takeFrame() {
    var remainingPins = 10 - this.rollBallRandom(10);
    if (remainingPins === 0) {
      remainingPins = 10;
    }
    this.rollBallRandom(remainingPins);
  }

}
