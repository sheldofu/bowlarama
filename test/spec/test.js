(
  function () {

  'use strict';

	describe('Scoring functionality', function() {

		var Game, game = null;

		beforeEach(function() {
			Game = require('../../dist/js/scoreboard').default;
			game = new Game(2);
		});

		describe(' When playing a frame', function(){

			it(' generally score is same as pin amount', function(){
				game.rollBall(6);
				expect(game.players[0].totalScore()).toEqual(6);
			})

			it(' if Strike, The player scores 10 plus the number of pins knocked down in the next two rolls.', function(){
				game.rollBall(10);
				game.rollBall(5);
				game.rollBall(6);
				game.players[0].finalScore();
				expect(game.players[0].bonusPoints).toEqual(11); 
			})

			it(' if Spare, the player scores 10 plus the number of pins knocked down in the next roll.', function(){
				game.rollBall(5);
				game.rollBall(5);
				game.rollBall(3);
				game.rollBall(4);
				game.players[0].finalScore();
				expect(game.players[0].bonusPoints).toEqual(3);  
			})
		});


		describe(' Functionality can change when', function(){

			var Game, game = null;

			beforeEach(function() {
				Game = require('../../dist/js/scoreboard').default;
				game = new Game(10);
			});

			it (' grants another two rolls if strike happens on penultimate go', function(){
				game.rollBallX(3, 18);  
				game.rollBall(10);
				game.rollBall(2);
				game.lastFrame();
				console.log(game.players[0].score);
				game.players[0].finalScore();
				expect(game.players[0].score.length).toEqual(21);
			})

			it (' grants another roll if spare happens on last go', function(){
				game.rollBallX(3, 18);  
				game.rollBall(5);
				game.rollBall(5);
				game.lastFrame();
				console.log(game.players[0].score);
				game.players[0].finalScore();
				expect(game.players[0].score.length).toEqual(21);
			})
		})
	})
})();
