// routes/routes.js
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/login', (req, res) => {
    // Render the login.ejs file
    res.render('./../../loginSection/login.ejs'); // Assuming login.ejs is located in the root folder
});

router.post('/home', (req, res) => {
    // Handle form submission here if needed
    // For example, you can perform form validation and user authentication

    // Render the home.ejs view
    res.render('./../../main/home.ejs');
});

module.exports = router;
