(
  function () {

  'use strict';
	// var utils = require('../../dist/js/scoreboard');
 
	// describe('utils', function() {
	//   describe('#add', function() {
	//     it('should add two numbers', function() {
	//       //var actual = utils.sum(2, 4);
	//       expect.equal(4, 6);
	//     });
	//   });
	// });

	describe('Scoring functionality', function() {

		var Player, player, Game, game = null;

		beforeEach(function() {
			Player = require('../../dist/js/player').default;
			player = new Player('Player 1');
			Game = require('../../dist/js/scoreboard').default;
			game = new Game(2);
		});

		describe(' When playing a frame', function(){

			// it(' should generally call the take a turn method twice', function(){				
			// 	spyOn(game, 'takeTurn');
			// 	game.takeFrame(player);
			// 	expect(game.takeTurn).toHaveBeenCalledTimes(2);
			// })
			it(' generally score is same as pin amount', function(){
				game.rollBall(player, 6);
				console.log(player.totalScore())
				expect(player.totalScore()).toEqual(6);
			})
			it(' if Strike, The player scores 10 plus the number of pins knocked down in the next two rolls.', function(){
				game.rollBall(10);
				game.rollBall(5);
				game.rollBall(6);
				expect(player.totalScore()).toEqual(32); 
			})

			it(' if Spare, the player scores 10 plus the number of pins knocked down in the next roll.', function(){
				game.rollBall(5);
				game.rollBall(5);
				game.rollBall(3);
				game.rollBall(4);
				expect(player.totalScore()).toEqual(20);  
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
