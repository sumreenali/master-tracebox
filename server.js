const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = new express();
//middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

// DB connection
mongoose.connect(db, {
    useNewUrlParser: true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(()=> console.log("MongDB Connected.."))
.catch(err => console.log(err));

//routes
const product_route = require('./routes/api/product');
app.use('/api/product', product_route);

//Port Config
const port = process.env.PORT|| 5001;
app.listen(port, ()=> console.log(`Server is started on port:  ${port}`));