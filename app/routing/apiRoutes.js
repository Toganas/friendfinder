let friendsData = require("../data/friends.js")


module.exports = (app) => {
    // GET
    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    })

    // POST
    app.post("/api/friends", (req, res) => {
        // saying who the new friend is based on the answers
        let bestMatch = {
            name: "",
            picture: "",
            newDifference: 100000000
        };

        // taking the result from the survey post
        let data = req.body
        let newScores = data.scores;

        // used to calculate difference between users
        let totalDifference = 0;
        // loop through friend possibilities
        for (var i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i]);
            totalDifference = 0;
            // loop through each friend
            for (var j = 0; j < friendsData[i].scores[j]; j++) {
                // difference between scores, getting the absolute value
                totalDifference += Math.abs(parseInt(newScores[j]) - parseInt(friendsData[i].scores[j]));
                if (totalDifference <= bestMatch.newDifference) {
                    bestMatch.name = friendsData[i].name;
                    bestMatch.picture = friendsData[i].picture;
                    bestMatch.newDifference = totalDifference;
                }
            }
        }

        friendsData.push(data);

        res.json(bestMatch);
    })

}