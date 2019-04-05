var friendData = require("../data/friends");

module.exports = function(app){
    app.get("/api/data", (req, res) => {
        res.json(friendData);
    })
    app.post("/api/data", function(req, res) {
        friendData.push(req.body)
    })

}