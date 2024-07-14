const Product = require('../models/product')


const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({
        featured: true,
    })
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    const {featured, company} = req.query;
    const queryObject ={}
    let result = Product.find(queryObject)

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    
    if (company) {
        queryObject.company = company
    }
    
    console.log(queryObject)

    const page = Number(req.query.pages) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page-1) * limit;

    result = result.skip(skip).limit(limit)
    
    const products = await Product.find(req.query);
    res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}