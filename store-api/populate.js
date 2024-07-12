require('dotenv').config()

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json')


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('Success!!!')
        await Product.create(jsonProducts);
    } catch (error) {
        console.log(error)
    }
}

start()