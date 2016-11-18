// player.js
export default class Player {

  constructor(name) {
    this.name = name || "Player"; 
    this.score = [0];
  }

  addScore(pins) {
    this.score.push(pins);
  }

  totalScore() {
  	return this.score.reduce(function(a,b){
  		return a + b;
  	}, 0);
  }
}
