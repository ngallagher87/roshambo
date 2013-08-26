/*
  The red God manages all things battle related.

  Here we're going to define our battle flow
*/
var red_god = (function() {
  "use strict";
  var vm = require('vm'),
      util = require('util');
      

  // Creates a red god
  function red_god() {
    // Init instance variables here
  }

  // Starts the battle between the two passed fireteams
  red_god.prototype.startBattle = function(code1, code2, callback) {
    var sandbox = {
	      result: null
        },
        results = {
	      player_one: null,
	      player_two: null
        };
    console.log('Starting fight');
    // Battle here!
    vm.runInNewContext(code1, sandbox, 'code1.vm');
    results.player_one = until.inspect(sandbox.result);
    // Reset the sandbox
    sandbox = {
	  result: null
    };
    vm.runInNewContext(code2, sandbox, 'code2.vm');
    results.player_two = until.inspect(sandbox.result);
    this.calculateWinner(results.player_one, results.player_two, function winners(err, winner) {
      if (err) {
        winner = 'There was an error processing this battle!';
      }
      callback(err, winner);
    });
  }
  
  red_god.prototype.calculateWinner = function(res1, res2, callback) {
    var rock = -1,
        paper = 0,
        scissors = 1,
        winner = null;
    if (res === -1) {
      switch (res2) {
        case -1: winner = 0; break;
        case 0:  winner = 2; break;
        case 1:  winner = 1; break;
      }
    } else if (res1 === 0) {
      switch (res2) {
        case -1: winner = 1; break;
        case 0:  winner = 0; break;
        case 1:  winner = 2; break;
      }
    } else if (res1 === 1) {
      switch (res2) {
        case -1: winner = 2; break;
        case 0:  winner = 1; break;
        case 1:  winner = 0; break;
      } 
    }
    var err = (!winner) ? 'No winner calculated.' : null;
    callback(err, winner);
  }
  // Return the object
  return new red_god();
})();
// Export the red god for node
module.exports = red_god;
