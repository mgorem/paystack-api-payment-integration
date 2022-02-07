//setting up monoDB Database using mongoose

/*import the installed mongoose module
 and store it to a constant name ‘mongoose’.*/
const mongoose = require(mongoose);

/*create a connection to the MongoDB 
database ‘my-pay-app’ on our local 
machine on the port 27017*/
mongoose.connect(
    mongodb, //localhost:27017/my-pay-app’,
    {
        useNewUrlParser: true,
    }
);

/*export it so it can be used in other 
JavaScript files within my project*/
module.exports = {
    mongoose,
};
