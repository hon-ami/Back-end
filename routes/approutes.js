var express = require('express');
'use strict';

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


module.exports = function(app) {
  var restaurant = require('../controllers/appController');

  // restaurant Routes
  app.route('/api/restaurant')
    .get(restaurant.list_all_tasks_promise);

  app.route('/api/restaurant/borough')
    .get(restaurant.All_Borough_promise);  
  
  app.route('/api/restaurant/:boroughname/borough')
    .get(function(req, res){
      var boroughName = req.params
      console.log(boroughName);
      restaurant.Borough_Desc_promise(boroughName)
    })
  };



