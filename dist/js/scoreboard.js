'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('./player');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// scoreboard.js
var Game = function () {
  function Game(players) {
    _classCallCheck(this, Game);

    this.players = [];
    for (var i = 0; i < players; i++) {
      console.log(i);
      this.players[i] = new _player2.default('Player ' + i);
    }
    this.totalFrames = 10;
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      var _this = this;

      for (var i = 0; i < this.totalFrames; i++) {
        this.players.forEach(function (player) {
          _this.takeFrame(player);
        });
      }

      //last frame
      this.players.forEach(function (player) {
        var i = 20;
        //if players penultimate score is 10, roll ball twice
        if (player.score[i] + player.score[i - 1] === 10) {
          _this.rollBallRandom(player);
        }
        //if players last frame adds up to 10, roll ball again
        if (player.score[i - 1] === 10) {
          _this.rollBallRandom(player);
        }
        player.finalScore();
      });

      return this.players;
    }
  }, {
    key: 'rollBallX',
    value: function rollBallX(player, pins, rolls) {
      for (var i = 1; i < rolls; i++) {
        this.rollBallRandom(player, pins);
      }
    }
  }, {
    key: 'rollBall',
    value: function rollBall(player, pins) {
      player.addScore(pins);
    }
  }, {
    key: 'rollBallRandom',
    value: function rollBallRandom(player, remainingPins) {
      var pins = Math.round(Math.random() * remainingPins);
      this.rollBall(player, pins);
      return pins;
    }
  }, {
    key: 'takeFrame',
    value: function takeFrame(player) {

      var remainingPins = 10 - this.rollBallRandom(player, 10);
      console.log(remainingPins);
      if (remainingPins === 0) {
        remainingPins = 10;
      }
      this.rollBallRandom(player, remainingPins);
      console.log('taking turn', player);
    }
  }]);

  return Game;
}();

exports.default = Game;
//# sourceMappingURL=scoreboard.js.map
