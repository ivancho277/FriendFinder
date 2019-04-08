var friendData = require("../data/friends");

module.exports = function(app){
    app.get("/api/data", (req, res) => {
        res.json(friendData);
    })
    app.post("/api/data", function(req, res) {
        friendData.push(req.body)
        res.json(checkArrayDif(req.body, friendData))
    })
}
function checkArrayDif(me, arr){
    var sumarr = arr.map(x => x.scores.reduce((a,b) => a +b))
    var mysum = me.scores.reduce((a,b) => a+b)
    //check what my sum is closest to
    console.log(sumarr)
    var closest = Math.abs(sumarr[0] - mysum)
    //array to hold multiple values if they are closest;
    var matches = []
    for(var i = 1; i < sumarr.length; i++){
        if(Math.abs(sumarr[i] - mysum) < closest){
          closest = i
      }
    }
    console.log(mysum)
    console.log(closest)
    return arr[closest]
  }
  
//   var myarr = [1,2,3,4,5,5,4,3,2,1]
//   var arr1 = [5,3,3,1,4,4,5,4,1,5]
//   var arr2 = [2,2,1,1,5,5,5,5,5,5]
//   var arr3 = [4,1,1,2,3,1,4,5,5,1]
//   var arrofarr = [arr1, arr3, arr2]
  
  
  
  
//   console.log(checkArrayDif(myarr, arrofarr))
//   console.log(myarr)