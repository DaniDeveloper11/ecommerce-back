const Product = require('../models/Product');



exports.getAllProducts = async (req, res) => {
    try{
        const products = await Product.findAll();
        res.json(products);
    }catch(error){
        res.status(500).send(error)
    }
};

exports.createProduct = async (req, res) => {

try{
    const product = await Product.create(req.body);
    res.status(201).send(product);
}catch(error){
    res.status(500).send(error);
}

};