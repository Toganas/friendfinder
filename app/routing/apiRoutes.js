let friendsData = require("../data/friends")


module.exports = (app) => {
    // GET
    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    })

    // POST
    app.post("/api/friends", (req, res) => {
        let newFriend = {
            name: "",
            picture: "",
            newDifference: 100000000
        };

        let data = req.body
        let newScores = data.scores;
        let newName = data.name;
        let newPicture = data.picture;

        let totalDifference = 0;

        for (var i = 0; i < friendsData.length -1; i++){
            totalDifference = 0;

            for (var j=0; j <10; j++) {
                totalDifference += Math.abs(parseInt(newScores[j] - parseInt(friendsData[j])));
                if (totalDifference <= newFriend.newDifference) {
                    newFriend.name = friendsData[i].name;
                    newFriend.picture = friendsData[i].picture;
                    newFriend.newDifference = totalDifference;
                }
            }
        }


        friendsData.push(data);
        
        res.json(newFriend);
    })

}