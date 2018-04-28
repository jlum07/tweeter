"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");
const {ObjectId} = require('mongodb');

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {

      db.collection('tweets').insertOne(newTweet);
      callback(null, true);

    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {

      db.collection("tweets").find().sort({created_at: 1}).toArray(callback);

    },

    // Return only one tweet to display
    getOneTweet: function(id ,callback) {

      // console.log("getonetweet")
      // db.collection("tweets").find({"_id" : req.params.id}).toArray(callback);
      // db.collection("tweets").find({"_id" : "5ae12cf16245e23760cf6655"});
      // callback(null, true);

      // db.collection("tweets").findOne({"_id" : "5ae12cf16245e23760cf6655"}, callback);

      // console.log(id);
      // db.collection("tweets").findOne(ObjectId(`5ae12cf16245e23760cf6655`), callback);

      db.collection("tweets").findOne(ObjectId(id), callback);

      // callback(null, db.collection("tweets").find({"_id" : "5ae12cf16245e23760cf6655"}));

    }

  };
}
