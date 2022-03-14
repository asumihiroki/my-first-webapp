const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', function(req, res) {
    Product.find({}, function(err, foundProjects){
        return res.json(foundProjects)
    })
})

router.get('/:productId', function(req, res) {
    const productId = req.params.productId

    Product.findById(productId, function(err, foundProject){
        if(err) {
            return res.status(422).send({ erros: [{title: 'Product error', detail: 'Product not found!'}] })
        }
        
        return res.json(foundProject)
    })
})

module.exports = router