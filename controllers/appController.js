'use strict';

var restaurant = require('../model/appModel.js');

exports.list_all_tasks_promise = function(req, res) {
    restaurant.promiseExample()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
};

exports.All_Borough_promise = function(req, res) {
    restaurant.getAllBoroughDesc()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
};

exports.Borough_Desc_promise = function(boroughName, req, res) {
    restaurant.Borough_Desc_promise(boroughName)
    .then((result) => {
               
        res.status(200).json(result)
    })
    .catch((err) => {
        console.log(res); 
        res.status(400).json(err);
    })
}

