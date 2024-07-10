require('dotenv').config()

const express = require('express');
const app = express();

const notFoundMiddlware =  require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

app.use(express.json());

// routes

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

// products route


app.use(notFoundMiddlware)
app.use(errorMiddleware)