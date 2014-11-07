#!/usr/bin/env node

var scores = require('./');
var pkg   = require('./package');
var argv  = process.argv[2];

function help() {
  console.log([

  ].join(' '));
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
    console.log(data);
  });
  return;
}

if (argv === '-t') {
  scores.team(process.argv[3].toLowerCase(), function (err, data) {
    if (err) throw err;
    console.log(data);
  });
  return;
}

scores.all(function (err, data) {
  if (err) throw err;
  console.log(data);
})
