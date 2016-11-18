import Player from "./player";

// scoreboard.js
export default class Game {
  
  constructor(players) {
  	this.players = [];
  	console.log(players + 'k');
    for (let i=0; i < players; i++){
    	console.log(i);
    	this.players[i] = new Player('Player ' + i); 
    }
    this.players[0].turn = true;
    console.log(this.players);
    this.totalFrames = 10; 
    this.currentFrame = 1;
  }

  start() {
  	for (let i = 0; i < this.totalFrames; i++) { 	
  		console.log(i, " in for loop");
	  	this.players.forEach((player) => {
	  		console.log('in foreach');
  		 	this.takeFrame(player);	
	    });
	}
    return this.players;
  }

  rollBall(player, pins) {
    player.addScore(pins);
  }

  rollBallRandom() {
  	player.addScore(Math.round(Math.random() * 10));
  }

  takeFrame(player, forcedNumber) {
    currentFrame = currentFrame + 1;
    var remainingPins = 10 - this.rollBallRandom();
    if (remainingPins !== 0) {
      remainingPins = rollBallRandom(remainingPins);
    }
    player.addScore = remainingPins;
  	console.log('taking turn', player, turnScore);
  }

}
