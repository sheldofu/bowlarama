"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require("./player");

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// scoreboard.js
var Game = function () {
  function Game(players) {
    _classCallCheck(this, Game);

    this.players = [];
    this.currentPlayer = 0;
    for (var i = 0; i < players; i++) {
      this.players[i] = new _player2.default('Player ' + i);
    }
    this.totalFrames = 10;
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      for (var i = 0; i < this.totalFrames * this.players.length; i++) {
        this.takeFrame();
        this.nextPlayer();
      }
      this.lastFrame();
      return this.players;
    }
  }, {
    key: "nextPlayer",
    value: function nextPlayer() {
      if (this.currentPlayer + 1 === this.players.length) {
        this.currentPlayer = 0;
      } else {
        this.currentPlayer += 1;
      }
    }
  }, {
    key: "lastFrame",
    value: function lastFrame() {
      var _this = this;

      //last frame
      this.players.forEach(function (player, cur) {
        var i = player.score.length - 1;
        _this.currentPlayer = cur;
        //if players last frame adds up to 10, roll ball again
        if (player.score[i] + player.score[i - 1] === 10) {
          _this.rollBallRandom(10);
        }
        //if players penultimate score is 10, roll ball (will already have been rolled again)
        if (player.score[i - 1] === 10) {
          _this.rollBallRandom(10);
        }
        player.finalScore();
      });
    }
  }, {
    key: "rollBallX",
    value: function rollBallX(pins, rolls) {
      for (var i = 0; i < rolls; i++) {
        this.rollBallRandom(pins);
      }
    }
  }, {
    key: "rollBall",
    value: function rollBall(pins) {
      this.players[this.currentPlayer].addScore(pins);
    }
  }, {
    key: "rollBallRandom",
    value: function rollBallRandom(remainingPins) {
      var pins = Math.round(Math.random() * remainingPins);
      this.rollBall(pins);
      return pins;
    }
  }, {
    key: "takeFrame",
    value: function takeFrame() {
      var remainingPins = 10 - this.rollBallRandom(10);
      if (remainingPins === 0) {
        remainingPins = 10;
      }
      this.rollBallRandom(remainingPins);
    }
  }]);

  return Game;
}();

exports.default = Game;
//# sourceMappingURL=scoreboard.js.map
