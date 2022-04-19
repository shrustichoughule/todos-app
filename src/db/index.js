const { connect } = require("mongoose");

const uri = "mongodb+srv://shrusti:r23o2yBSCZJ6tXtq@cluster0.kd0at.mongodb.net/db?retryWrites=true&w=majority"
//const uri = ""

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)