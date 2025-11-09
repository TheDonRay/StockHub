const express = require("express");
const app = express();
require("dotenv").config(); // for the dot env here. 

//instantiate the routes here 
const testingRoute = require("./routes/testRoute.js"); 

// simple middleare to get started.
app.use(express.json());

//define Port
const PORT = process.env.PORT; 

//define the  route mapping (the actual routing of the route) 
app.use('/api/', testingRoute); 

app.get("/", (req, res) => {
  res.json({
    Server: "Backend is running Ray",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
