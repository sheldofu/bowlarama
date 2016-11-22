(
  function () {

  'use strict';

	describe('Scoring functionality', function() {

		var Player, player, Game, game = null;

		beforeEach(function() {
			Player = require('../../dist/js/player').default;
			player = new Player('Player 1');
			Game = require('../../dist/js/scoreboard').default;
			game = new Game(2);
		});

		describe(' When playing a frame', function(){

			it(' generally score is same as pin amount', function(){
				game.rollBall(player, 6);
				console.log(player.totalScore())
				expect(player.totalScore()).toEqual(6);
			})

			it(' if Strike, The player scores 10 plus the number of pins knocked down in the next two rolls.', function(){
				game.rollBall(player, 10);
				game.rollBall(player, 5);
				game.rollBall(player, 6);
				player.finalScore();
				expect(player.bonusPoints).toEqual(11); 
			})

			it(' if Spare, the player scores 10 plus the number of pins knocked down in the next roll.', function(){
				game.rollBall(player, 5);
				game.rollBall(player, 5);
				game.rollBall(player, 3);
				game.rollBall(player, 4);
				player.finalScore();
				expect(player.bonusPoints).toEqual(3);  
			})

			it (' grants another two rolls if strike happens on last go', function(){
				game.rollBallX(player, 3, 19);  
				game.rollBall(player, 10);
				console.log(player.score);
				player.finalScore();
				expect(player.score.length).toEqual(22);
			})

			it (' grants another roll if spare happens on last go', function(){
				game.rollBallX(player, 3, 18);  
				game.rollBall(player, 5);
				game.rollBall(player, 5);
				console.log(player.score);
				player.finalScore();
				expect(player.score.length).toEqual(21);
			})
		})

		describe (' When rolling the ball once', function(){

		beforeEach(function() {
			Player = require('../../dist/js/player').default;
			player = new Player('Player 1');
			Game = require('../../dist/js/scoreboard').default;
			game = new Game(2);
		});

			it(' should return between 0 and 10 pins', function(){
				game.rollBall(player, 1);
				console.log(player.totalScore());
			})

		})
	})
})();
