const Product = require('../models/product')


const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({
        featured: true,
    }).sort('name').limit(10).skip(5)
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    const {featured, company} = req.query;
    const queryObject ={}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    
    if (company) {
        queryObject.company = company
    }
    
    console.log(queryObject)
    
    const products = await Product.find(req.query);
    res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}