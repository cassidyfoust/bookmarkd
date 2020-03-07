const express = require("express");
const router = express.Router();
const axios = require("axios");
require('dotenv').config();

router.get('/', (req, res) => {
    let endpoint = `https://www.googleapis.com/books/v1/volumes?q=fiction&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
    axios({
        method: 'GET',
        url: endpoint
    })
        .then((response) => {
            console.log('heres the response!' + response.data)
            res.send(response.data)
        })
        .catch(error => {
            console.log('error:', error)
        })
})

module.exports = router;