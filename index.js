
const express =  require('express');
const { request } = require('http');

const app = express();

app.get('/', (request, response) => {
    

});

// const { readFile, readFileSync } = require('fs');

// const txt =  readFileSync ('./hello.txt', 'utf8');

// console.log(txt)
// console.log('Run ASAP')

// const { readFile } = require ('fs').promisses;

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }