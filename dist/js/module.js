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
    key: 'rollBall',
    value: function rollBall() {
      this.ball.classList.add("bowling");
      console.log(this.ball);
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
      console.log(this.players);
      var playerEqualiser = Math.round((this.currentRoll + 1) / this.players.length); //change to number of players
      document.querySelector('.player' + this.currentPlayer + ' td:nth-child(' + playerEqualiser + ')').innerHTML = this.players[this.currentPlayer].score[playerEqualiser - 1];
    }
  }, {
    key: 'nextPlayer',
    value: function nextPlayer() {
      if (this.currentPlayer + 1 === this.players.length) {
        this.currentPlayer = 0;
      } else {
        this.currentPlayer = this.currentPlayer + 1;
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
      var pinScore = this.players[this.currentPlayer].score[Math.round(this.currentRoll / this.players.length)];
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

var game = new _scoreboard2.default(2);

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


},{"./player":3}]},{},[2]);
