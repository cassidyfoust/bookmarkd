const express = require("express");
const router = express.Router();
const axios = require("axios");
require('dotenv').config();

router.get('/', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 101);
    let endpoint = `https://www.googleapis.com/books/v1/volumes?q=a&maxResults=5&startIndex=${randomNumber}&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
    axios({
        method: 'GET',
        url: endpoint
    })
        .then((response) => {
            res.send(response.data)
        })
        .catch(error => {
            console.log('error:', error)
        })
})

module.exports = router;