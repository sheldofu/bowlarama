'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// anim.js
var Anim = function () {
  function Anim(players) {
    _classCallCheck(this, Anim);

    this.players = players;
    this.currentPlayer = 0;
    this.currentRoll = 0;
    this.bindUI();
    this.scoreSetup();
  }

  _createClass(Anim, [{
    key: 'bindUI',
    value: function bindUI() {
      this.pins = document.querySelectorAll(".pins");
      this.ball = document.getElementById('ball');
      var ind = document.getElementById('ind');
      var next = document.getElementById('nextRound');
      ind.addEventListener("animationend", this.resetFrame.bind(this));
      next.addEventListener("click", this.turnLoop.bind(this));
    }
  }, {
    key: 'scoreSetup',
    value: function scoreSetup() {
      for (var i = 0; i < this.players.length; i++) {
        var row = document.createElement("tr");
        row.id = "player" + i;
        document.getElementById('scoreTable').appendChild(row);
        var totalScore = document.createElement("td");
        totalScore.innerHTML = this.players[i].totalScore();
        document.getElementById('player' + i).appendChild(totalScore);
      }
    }
  }, {
    key: 'rollBall',
    value: function rollBall() {
      this.ball.classList.add("bowling");
    }
  }, {
    key: 'turnLoop',
    value: function turnLoop() {
      this.scoreReveal();
      this.rollBall();
      this.nextTurn();
      this.nextPlayer();
    }
  }, {
    key: 'scoreReveal',
    value: function scoreReveal() {
      var score = document.createElement("td");
      var playerEqualiser = Math.ceil((this.currentRoll + 1) / this.players.length);
      score.innerHTML = this.players[this.currentPlayer].score[playerEqualiser - 1];
      document.getElementById('player' + this.currentPlayer).appendChild(score);
    }
  }, {
    key: 'nextPlayer',
    value: function nextPlayer() {
      if (this.currentPlayer + 1 === this.players.length) {
        this.currentPlayer = 0;
      } else {
        this.currentPlayer += 1;
      }
    }
  }, {
    key: 'resetFrame',
    value: function resetFrame() {
      for (var i = 0; i < this.pins.length; i++) {
        this.pins[i].classList.remove("knocked");
      }
      this.ball.classList.remove("bowling");
    }
  }, {
    key: 'nextTurn',
    value: function nextTurn() {
      var pinScore = this.players[this.currentPlayer].score[Math.round((this.currentRoll - 1) / this.players.length)];
      this.currentRoll = this.currentRoll + 1;
      this.pinsKnocked(pinScore);
      if (pinScore === 0) {
        this.resetFrame();
      }
    }
  }, {
    key: 'pinsKnocked',
    value: function pinsKnocked(pinCount) {
      for (var i = 0; i < pinCount; i++) {
        this.pins[i].classList.add("knocked");
      }
    }
  }]);

  return Anim;
}();

exports.default = Anim;
//# sourceMappingURL=anim.js.map
