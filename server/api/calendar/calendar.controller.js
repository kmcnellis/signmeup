'use strict';

var _ = require('lodash');
var Calendar = require('./calendar.model');

// Get list of calendars
exports.index = function(req, res) {
  Calendar.find(function (err, calendars) {
    if(err) { return handleError(res, err); }
    return res.json(200, calendars);
  });
};

// Get a single calendar
exports.show = function(req, res) {
  Calendar.findById(req.params.id, function (err, calendar) {
    if(err) { return handleError(res, err); }
    if(!calendar) { return res.send(404); }
    return res.json(calendar);
  });
};

// Creates a new calendar in the DB.
exports.create = function(req, res) {
  Calendar.create(req.body, function(err, calendar) {
    if(err) { return handleError(res, err); }
    return res.json(201, calendar);
  });
};

// Updates an existing calendar in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Calendar.findById(req.params.id, function (err, calendar) {
    if (err) { return handleError(res, err); }
    if(!calendar) { return res.send(404); }
    var updated = _.merge(calendar, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, calendar);
    });
  });
};

// Deletes a calendar from the DB.
exports.destroy = function(req, res) {
  Calendar.findById(req.params.id, function (err, calendar) {
    if(err) { return handleError(res, err); }
    if(!calendar) { return res.send(404); }
    calendar.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}