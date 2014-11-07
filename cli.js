#!/usr/bin/env node

var scores = require('./');
var pkg   = require('./package');
var argv  = process.argv[2];

function help() {
  console.log([
    '',
    '  ' + pkg.description,
    '',
    '  Usage',
    '    scores-table',
    '    ',
    '  Options',
    '    -l         Outputs only live matches',
    '    -f         Outputs only finished matches',
    '    -t <team>  Outputs only matches from <team>'
  ].join('\n'));
}

function version() {
  console.log(pkg.version);
}

if (argv === '-h') {
  help();
  return;
}

if (argv === '-v') {
  version();
  return;
}

if (argv === '-l') {
  scores.live(function (err, data) {
    if (err) throw err;
    console.log('\n' + data);
  });
  return;
}

if (argv === '-f') {
  scores.finished(function (err, data) {
    if (err) throw err;
    console.log('\n' + data);
  });
  return;
}

if (argv === '-t') {
  scores.team(process.argv[3].toLowerCase(), function (err, data) {
    if (err) throw err;
    console.log('\n' + data);
  });
  return;
}

scores.all(function (err, data) {
  if (err) throw err;
  console.log('\n' + data);
})
