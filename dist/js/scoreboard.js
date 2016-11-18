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
    console.log(players + 'k');
    for (var i = 0; i < players; i++) {
      console.log(i);
      this.players[i] = new _player2.default('Player ' + i);
    }
    this.players[0].turn = true;
    console.log(this.players);
    this.totalFrames = 10;
    this.currentFrame = 1;
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      var _this = this;

      for (var i = 0; i < this.totalFrames; i++) {
        console.log(i, " in for loop");
        this.players.forEach(function (player) {
          console.log('in foreach');
          _this.takeFrame(player);
        });
      }
      return this.players;
    }
  }, {
    key: 'rollBall',
    value: function rollBall(player, pins) {
      player.addScore(pins);
    }
  }, {
    key: 'rollBallRandom',
    value: function rollBallRandom() {
      player.addScore(Math.round(Math.random() * 10));
    }
  }, {
    key: 'takeFrame',
    value: function takeFrame(player, forcedNumber) {
      currentFrame = currentFrame + 1;
      var remainingPins = 10 - this.rollBallRandom();
      if (remainingPins !== 0) {
        remainingPins = rollBallRandom(remainingPins);
      }
      player.addScore = remainingPins;
      console.log('taking turn', player, turnScore);
    }
  }]);

  return Game;
}();

exports.default = Game;
//# sourceMappingURL=scoreboard.js.map
