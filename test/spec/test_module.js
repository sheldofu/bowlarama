(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
// scoreboard.js
function sum(x, y) {
  return x + y;
}
var pi = exports.pi = 3.141593;


},{}],2:[function(require,module,exports){
(function () {

  'use strict';

	var utils = require('../../dist/js/scoreboard');

	describe('utils', function() {
	  describe('#add', function() {
	    it('should add two numbers', function() {
	      var actual = utils.sum(2, 4);
	      expect(actual).toBe(6);
	    });
	  });
	});

},{"../../dist/js/scoreboard":1}]},{},[2]);
