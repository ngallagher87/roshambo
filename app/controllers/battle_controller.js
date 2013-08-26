/**
  Module dependencies
*/
var mongoose = require('mongoose'),
    async    = require('async'),
    redgod   = require('./red_god_controller.js'),
    User = mongoose.model('User');

/**
  Loads a soldier
    id is the soldier to load
*/
var startBattle = function startBattle(script_1, script_2, root_cb) {
   async.parallel([
     function(callback) {
       var victor = redgod.startBattle(script_1, script_2, callback);
     }
   ],
   function (err, result) {
     root_cb(err, result[0]);
   }
  ); 
}

/**
  Export our functions for node
*/
exports.startBattle = startBattle;