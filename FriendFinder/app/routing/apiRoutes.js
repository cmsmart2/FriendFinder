const friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friends)
    })

app.post("/api/friends", function(req, res){
    const userAnswers = req.body;
    const userScore = userAnswers.score;
    // console.log("answers" + userAnswers)
    // console.log("score: " + userScore)
    let match = {
        name: "",
        photo: "",
        difference: 100
    };

    let totalDifference = 0;

for (var a =0; a<friends.length; a++){
    for (var i = 0; i< friends[a].scores[i]; i++){
        totalDifference += Math.abs(parseInt(userScore[i])- parseInt(friends[a].scores[i]))
        if (totalDifference <= match.difference){
            match.name = friends[a].name
            match.photo = friends[a]. photo
            match.difference = totalDifference
                }
            }
        }
        console.log(match)
    res.json(match);
    });
};
