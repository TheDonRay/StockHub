const express = require('express'); 
const app = express();  
require('dotenv').config(); // for the dot env here.

// simple middleare to get started. 
app.use(express.json()); 

const PORT = process.env.PORT;  

app.get('/', (req, res) => { 
    res.send({ 
        ResponseMessage: 'Backend is running Ray'
    }); 
}); 

app.listen(PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`); 
}); 

