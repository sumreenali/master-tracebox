const express = require('express');
const Router = express.Router();

//Product Model
const Product = require('../../model/product');

//@route GET api/product
//@desc GET All Products
//@access public
Router.get('/',(req, res) => {
    Product.find()
    .sort({id: -1})
    .then(product => res.json(product));
});

// @route POST api/product
// @desc POST a Product
// @access public
Router.post('/',(req, res) => {
   const newProduct = new Product({
       image: req.body.image,
       name: req.body.name,
       description: req.body.description,
       price: req.body.price,
       quantity: req.body.price,
       date: req.body.date,
       status: req.body.status
   });
   newProduct.save().then(product => res.json(product));
});

// @route DELETE api/product
// @desc DELETE a Product
// @access public
Router.delete('/:id',(req, res) =>{
    Product.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}))
})
module.exports = Router;