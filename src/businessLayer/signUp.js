const nodemailer = require('nodemailer');
const config = require('./../../config/config');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: config.gmailusrname,
      pass: config.gmailpwd
    },
    tls: {
      rejectUnauthorized: false
      }
  });
  


const  signUp = function(req, callback) {
    const otp = Math.floor((Math.random() * 9999) + 1000);
    console.log('OTP', otp);
    var mailOptions = {
        from: 'arunmathew057@gmail.com',
        to: 'arunmathew057@gmail.com',
        subject: 'Verify your account',
        text: `Your otp is ${otp}`
    };
    transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              callback(error);
            } else {
              console.log('Email sent: ' + info.response);
                callback(info.response);
            }
          });
     };

 
module.exports = signUp;