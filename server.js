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

// routes to server

// GET
// Go to survey
app.get("/survey", (req,res)=>{
    console.log(req.method);
    res.sendFile(path.join(__dirname, "app/public/survey.html"))
})
// Go to homepage
app.get("/*",(req,res)=>{
    console.log(req.mehotd);
    res.sendFile(path.join(__dirname, "app/public/home.html"))
})
// POST
app.post("/survey",(req,res)=>{
    console.log(req.body);
    res.send("Post the survery results")
})
// server reposts
app.listen(PORT, ()=>{
    console.log("app listening on " + PORT);
})