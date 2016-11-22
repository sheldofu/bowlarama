// player.js
export default class Player {

  constructor(name) {
    this.name = name || "Player"; 
    this.score = [];
    this.bonusPoints = 0;
  }

  addScore(pins) {
    this.score.push(pins);
  }

  totalScore() {
  	var accumulatedScore = this.score.reduce(function(a,b){
  		return a + b;
  	}, 0);
  	return this.bonusPoints + accumulatedScore;
  }

  finalScore() {
	for (let i=0; i < 20; i++) {
  		if (i % 2 === 0) {
  			if (this.score[i] === 10 && i < 19) {
  				this.bonusPoints += this.score[i+1] + this.score[i+2]; 
  			}
  		}
  		else if ((this.score[i] + this.score[i-1] === 10) && i < 19) {
  				this.bonusPoints += this.score[i+1]; 	
  		}
  	}
  }
}
