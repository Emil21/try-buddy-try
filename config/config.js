const dotenv = require('dotenv');
dotenv.config();
const config = {
    env: process.env.NODE_ENV,
    port: process.env.SERVER_PORT,
    gmailusrname : process.env.USER_NAME,
    gmailpwd: process.env.GMAIL_PWD
};

module.exports = config;