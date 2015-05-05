'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: String,
  created: Date,
  startDate: Date,
  endDate: Date,
  timeBlockMinutes: Number,
  timeBlocks: [{start : Date , end : Date, taken : Boolean}],
  author: {type : Schema.Types.ObjectId, ref: 'User'},
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Event', EventSchema);
