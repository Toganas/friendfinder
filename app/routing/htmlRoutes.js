const path = require("path")

module.exports = (app) =>{

// GET
// Go to survey
app.get("/survey", (req, res) => {
    console.log("go to Survey");
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})
// Go to homepage
app.get("/*", (req, res) => {
    console.log("Go to homepage");
    res.sendFile(path.join(__dirname, "app/public/home.html"))
})
}