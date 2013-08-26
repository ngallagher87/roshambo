/**
  Module dependencies
*/
var mongoose = require('mongoose'),
    async    = require('async'),
    User = mongoose.model('User');
    
/**
  Finds an opponent!
*/
var findMatch = function findMatch(ref_id, callback) {
  // Generate a query
  var query = User
                .findOne()
                .where('_id').ne(ref_id);
  // Now generate the query results and trigger the callback
  query.select('_id')
        .exec(function findMatchQuery(err, user) {
          if (err || user == null) {
            err = 'No match found!';
            callback(err, null);
          } else {
            callback(err, user.code);
          }
        });
}

/**
  Export our functions for node
*/
exports.findMatch = findMatch;