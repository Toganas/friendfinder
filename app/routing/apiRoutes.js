let friendsData = require("../data/friends")


module.exports = (app) => {
    // GET
    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    })

    // POST
    app.post("/api/friends", (req, res) => {
        friendsData.push(req.body);
        res.json(true);
    })

}