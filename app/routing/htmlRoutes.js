// requiring dependencies
const path = require("path")
const express = require("express")
const app = express();

// setting static
app.use(express.static(path.join(__dirname, 'app')));

module.exports = (app) =>{

// GET
// Go to survey
app.get("/survey", (req, res) => {
    console.log("go to Survey");
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})

// Go to homepage
app.get("/", (req, res) => {
    console.log("Go to homepage");
    res.sendFile(path.join(__dirname, "../public/home.html"))
})
}