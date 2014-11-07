var colors  = require('colors');

module.exports.options = {
  chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
         , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
         , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
         , 'right': '' , 'right-mid': '' , 'middle': ' ' }
}

module.exports.colorify = function (status) {
  if (status === 'FT') return status.red;
  else if (status === 'HT') return status.yellow;
  else if (status.indexOf("'") > -1) return status.green;
  return status;
}

module.exports.isLive = function (status) {
  return (status === 'HT' || status.indexOf("'") > -1);
}

module.exports.isFinished = function (status) {
  return (status === 'FT');
}

module.exports.isPlaying = function (team, match) {
  return match.home.toLowerCase().indexOf(team) > -1
      || match.away.toLowerCase().indexOf(team) > -1;
}