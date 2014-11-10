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
    '    -l         Outputs live matches',
    '    -f         Outputs finished matches',
    '    -t <team>  Outputs matches from <team>',
    '    -p         Outputs matches from the previous day',
    '    -n         Outputs matches from the next day'
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

if (argv === '-p') {
  scores.previous(function (err, data) {
    if (err) throw err;
    console.log('\n' + data);
  });
  return;
}

if (argv === '-n') {
  scores.next(function (err, data) {
    if (err) throw err;
    console.log('\n' + data);
  });
  return;
}

scores.all(function (err, data) {
  if (err) throw err;
  console.log('\n' + data);
})
