const express = require("express")

const app = express()



app.use(date = (req, res, next) => {
    let newdate = new Date()
    console.log(newdate)
    var hour = newdate.getHours();

   
    if(hour>=8 && hour<=17){   app.use(express.static(__dirname + '/public'));next()}
    else {      res.send("closed")}
})





app.listen(3000, (err) => {
    if (err) console.log("Server is not Running ")
    else console.log("Server is Running")
})