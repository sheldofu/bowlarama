"use strict";

var _scoreboard = require("./scoreboard");

var score = _interopRequireWildcard(_scoreboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log("2π = " + score.sum(score.pi, score.pi));

console.log('here');
//# sourceMappingURL=app.js.map
