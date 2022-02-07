//importing the needed modules
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const pug = require('pug');
const _ = require('lodash');
const path = require('path');
const {Donor} = require('./models/donor')
const {initializePayment, verifyPayment} = 
require('./config/paystack')(request);

/*setup the express server by creating a 
port where our application can be listened*/

const port = process.env.PORT || 3000;

//Create express app
const app = express();

/*Use express app middleware to parse request 
body in objects in req.body of the requests*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

/*Set up express app middleware to serve 
public files from the public folder like css and 
js*/
app.use(express.static(path.join(__dirname, 'public/')));

//Set app's view engine to pug
app.set('view engine', pug);

