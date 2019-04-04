var friendData = require("../data/friends");

module.exports = function(app){
    app.get("/api/data", (req, res) => {
        res.json(friendData);
    })
}