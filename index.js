var scores  = require('scores-parser');
var lib     = require('./lib');
var Table   = require('cli-table');

var table = new Table(lib.options);

module.exports.all = function (cb) {
  scores(function (data) {
    [].forEach.call(data, function (el) {
      el.status = lib.colorify(el.status);
      table.push([el.status, el.home, el.result, el.away]);
    });
    cb(null, table.toString());
  });
}

module.exports.live = function (cb) {
  scores(function (data) {
    [].forEach.call(data, function (el) {
      if (!lib.isLive(el.status)) return;
      el.status = lib.colorify(el.status);
      table.push([el.status, el.home, el.result, el.away]);
    });
    cb(null, table.toString());
  });
}

module.exports.team = function (team, cb) {
  scores(function (data) {
    [].forEach.call(data, function (el) {
      if (!lib.isPlaying(team, el)) return;
      el.status = lib.colorify(el.status);
      table.push([el.status, el.home, el.result, el.away]);
    });
    cb(null, table.toString());
  });
}