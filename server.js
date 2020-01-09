const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = new express();

//middleware
app.use(bodyParser.json());
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

//DB config
const db = require('./config/keys').mongoURI;

// DB connection
mongoose.connect(db, {
    useNewUrlParser: true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then(()=> console.log("MongDB Connected.."))
.catch(err => console.log(err));

//routes
/**
 *  PRODUCT ROUTE
 */

const product_route = require('./routes/api/product');
app.use('/api/product', product_route);

/**
 * USER ROUTE
 */
const Users = require('./routes/users')
app.use('/user',Users)

//Port Config
const port = process.env.PORT|| 5000;
app.listen(port, ()=> console.log(`Server is started on port:  ${port}`));