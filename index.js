
const express =  require('express');
//const { readFile } = require('fs');
const { request } = require('http');

const app = express();
const { readFile } = require('fs').promises;

// app.get('/', (request, response) => {

//     readFile('./home.html', 'utf8', (err, html) => {

//         if (err){
//             response.status(500).send('sorry, server with error')
//         }

//         response.send(html);

//     })

// });


// get with promisses
app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8'));

});

app.listen(process.env.PORT || 3000, () => console.log(' Node App Availabe on http://localhost:3000'))

// const { readFile, readFileSync } = require('fs');

// const txt =  readFileSync ('./hello.txt', 'utf8');

// console.log(txt)
// console.log('Run ASAP')

// const { readFile } = require ('fs').promisses;

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }