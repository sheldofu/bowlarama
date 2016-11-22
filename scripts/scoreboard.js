import Player from "./player";

// scoreboard.js
export default class Game {
  
  constructor(players) {
  	this.players = [];
    for (let i=0; i < players; i++){
    	console.log(i);
    	this.players[i] = new Player('Player ' + i); 
    }
    this.totalFrames = 10; 
  }

  start() {
  	for (var i = 0; i < this.totalFrames; i++) { 	
	  	this.players.forEach((player) => {
  		 	this.takeFrame(player);	
	    });
	  }

    //last frame
    this.players.forEach((player) => {
        let i = 20;
        //if players penultimate score is 10, roll ball twice
        if (player.score[i] + player.score[i-1] === 10) {
          this.rollBallRandom(player);        
        }
        //if players last frame adds up to 10, roll ball again
        if (player.score[i-1] === 10) {
          this.rollBallRandom(player);        
        }
        player.finalScore()
    });

    return this.players
  }

  rollBallX(player, pins, rolls) {
    for (let i = 1; i < rolls; i++) {
      this.rollBallRandom(player, pins);
    }
  }

  rollBall(player, pins) {
    player.addScore(pins);
  }

  rollBallRandom(player, remainingPins) {
    var pins = Math.round(Math.random() * remainingPins);
  	this.rollBall(player, pins);
    return pins;
  }

  takeFrame(player) {

    var remainingPins = 10 - this.rollBallRandom(player, 10);
    console.log(remainingPins)
    if (remainingPins === 0) {
      remainingPins = 10;
    }
    this.rollBallRandom(player, remainingPins);
  	console.log('taking turn', player);
  }

}
