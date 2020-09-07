const express = require('express');
const { randomBytes } = require('crypto');

const app = express();

const comments = {};

app.get('/comments', (req, res) => {

});



app.post('/comments', (req, res) => {

});



app.listen(4001, () => {
    console.log('Listening on 4001')
});