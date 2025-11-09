const express = require('express'); 
const testRoute = express.Router(); 

testRoute.get('/testRoute', (req, res) => {
    res.json({ 
        endpoint: "Response is good to go route is running"
    });
}); 

module.exports = testRoute; 