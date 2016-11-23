"use strict";

var _scoreboard = require("./scoreboard");

var _scoreboard2 = _interopRequireDefault(_scoreboard);

var _anim = require("./anim");

var _anim2 = _interopRequireDefault(_anim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//param number of players
var game = new _scoreboard2.default(3);

var anim = new _anim2.default(game.start());
//# sourceMappingURL=app.js.map
