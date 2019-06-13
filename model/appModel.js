'user strict';
var sql = require('./db.js');

//Task object constructor
var restaurant = function(restaurant){
    this.restaurant_id = restaurant.restaurant_id;
    this.name = restaurant.name;
    this.longi = restaurant.longi;
    this.lat = restaurant.lat;
    this.street = restaurant.street;
    this.zipcode = restaurant.zipcode;
    this.borough = restaurant.borough;
    this.cuisine = restaurant.cuisine;
    this.grades = restaurant.grades;

};

// restaurant.getAllRestaurant = function getAllRestaurant(result) {
//         sql.query("Select * from restaurant", function (err, res) {

//                 if(err) {
//                     console.log("error: ", err);
//                     result(null, err);
//                 }
//                 else{
//                   console.log('restaurant : ', res);  

//                  result(null, res);
//                 }
//             });   
// };

restaurant.promiseExample = () => {
    return new Promise((resolve, reject) => {
        sql.query("Select * from restaurant", function (err, res) {

            if(err)
                return reject(err);

             return resolve(res);
        });   
    })
}

restaurant.getAllBoroughDesc = () => {
    return new Promise((resolve, reject) => {
        sql.query("Select * from borough_desc", function (err, res) {
            
            if(err)
                return reject(err);

            return resolve(res);
        })
    })
}

restaurant.Borough_Desc_promise = (boroughName) => {
    return new Promise((resolve, reject) => {
        sql.query("Select * from restaurant WHERE borough_title = '" + connection.escape(boroughName) + "'", function(err, res) {
            
            if(err)
                return reject(err);

            return resolve(res);
        })
    })
}

module.exports= restaurant;