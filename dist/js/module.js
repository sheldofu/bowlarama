(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}],2:[function(require,module,exports){
"use strict";

var _scoreboard = require("./scoreboard");

var _scoreboard2 = _interopRequireDefault(_scoreboard);

var _anim = require("./anim");

var _anim2 = _interopRequireDefault(_anim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//param number of players
var game = new _scoreboard2.default(3);

var anim = new _anim2.default(game.start());


},{"./anim":1,"./scoreboard":4}],3:[function(require,module,exports){
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
    this.score = [];
    this.bonusPoints = 0;
  }

  _createClass(Player, [{
    key: "addScore",
    value: function addScore(pins) {
      this.score.push(pins);
    }
  }, {
    key: "totalScore",
    value: function totalScore() {
      var accumulatedScore = this.score.reduce(function (a, b) {
        return a + b;
      }, 0);
      return this.bonusPoints + accumulatedScore;
    }
  }, {
    key: "finalScore",
    value: function finalScore() {
      for (var i = 0; i < 20; i++) {
        if (i % 2 === 0) {
          if (this.score[i] === 10 && i < 19) {
            this.bonusPoints += this.score[i + 1] + this.score[i + 2];
          }
        } else if (this.score[i] + this.score[i - 1] === 10 && i < 19) {
          this.bonusPoints += this.score[i + 1];
        }
      }
    }
  }]);

  return Player;
}();

exports.default = Player;


},{}],4:[function(require,module,exports){
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


},{"./player":3}]},{},[2]);
