const express = require('express'); 
const app = express();  
require('dotenv').config(); 

// simple middleare to get started. 
app.use(express.json()); 

const PORT = process.env.PORT; 