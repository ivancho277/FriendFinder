var friendData = require("../data/friends");

module.exports = function(app){
    app.get("/api/data", (req, res) => {
        res.json(friendData);
    })
    app.post("/api/data", function(req, res) {
        friendData.push(req.body)
    })

}

function checkArrayDif(arr){
    var sumarr = arr.map(x => x.reduce((a,b) => a +b))
    
    return sumarr
    
  }
  
  var arr1 = [5,3,3,1,4,4,5,4,1,5]
  var arr2 = [2,2,1,1,5,5,5,5,5,5]
  var arr3 = [4,1,1,2,3,1,4,5,5,1]
  var arrofarr = [arr1, arr3, arr2]