var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/27017/";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db('mydb');
    var myobj = { firstname : "soujanya", lastname : "maachannagari", email : "m.soujanya434@gmail.com" };
    dbo.collection("employees").insertOne(myobj, function(err,res){
        if(err) throw err;
        console.log("1 doc inserted.");
        db.close();
    });
});
