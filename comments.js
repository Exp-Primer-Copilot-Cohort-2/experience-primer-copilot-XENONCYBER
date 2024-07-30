// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Add middleware
app.use(bodyParser.json());

// Create a comments array
const comments = [
    {
        id: 1,
        username: 'Alice',
    }]
