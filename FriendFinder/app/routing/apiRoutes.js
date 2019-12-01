const friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friends)
    })
}
app.post("/api/friends", function(req, res){
    let match = {
        name: "",
        photo: "",
        difference: 100
    };
    console.log(req.body)
})