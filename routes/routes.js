/* File name : Route.js
 File Description: Handling all the routes to the application */
 const express = require('express');
 const apiLayer =  require('./../src/apiLayer/apilayer');
 
 const router = express.Router();
 
 
 // router.post('/insertdata', apiLayer.reserveRoom);
 router.get('/getdata', apiLayer.getuserdata);
 // router.get('/gethoteldata', apiLayer.getHotelData);
 
 
 module.exports = router;
 