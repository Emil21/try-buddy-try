/* File name : apilayer.js
 File Description: Handling all the API request and its response back */
 const signUp = require('./../businessLayer/signUp');
var nodemailer = require('nodemailer');


 const apilayer = {
    getuserdata : function(req, res) {
        signUp(req, function(err, response) {
            if(err) {
                return res.status(500).send(err);
            }
            return res.send(response);
        });
     }
 };
 
module.exports = apilayer;