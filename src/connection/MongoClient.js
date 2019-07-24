const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myapp", { useNewUrlParser: true });

let db;

let getDataDbConnection = function async() {
    db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function() {
        console.log("Mongoose Connection Opened");
    });
    return db;
};

module.exports = {
    getDataDbConnection
};
