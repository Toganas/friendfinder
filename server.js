// require dependencies
const express = require("express");
const path = require("path")
const app = express();

// port
const PORT = process.env.PORT || 3000;

// send to server
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}));
app.use(express.json())

// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// server reposts
app.listen(PORT, ()=>{
    console.log("app listening on " + PORT);
})