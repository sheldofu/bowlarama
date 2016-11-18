"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// player.js
var Player = function () {
  function Player(name) {
    _classCallCheck(this, Player);

    this.name = name || "Player";
    this.score = [0];
  }

  _createClass(Player, [{
    key: "addScore",
    value: function addScore(pins) {
      this.score.push(pins);
    }
  }, {
    key: "totalScore",
    value: function totalScore() {
      return this.score.reduce(function (a, b) {
        return a + b;
      }, 0);
    }
  }]);

  return Player;
}();

exports.default = Player;
//# sourceMappingURL=player.js.map
