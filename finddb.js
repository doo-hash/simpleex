var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/27017/";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    var query = {lastname : "bonagiri"};
    var query2 = { lastname : /^m/ };

   /* dbo.collection("employees").findOne({}, function(err, result){
        if(err) throw err;
        console.log(result.firstname);
        db.close();
    });

    dbo.collection("employees").find({}).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
        console.log(result[4].email);
        db.close();
    });

  dbo.collection("employees").find({}, { projection : { _id : 0, lastname : 1, firstname : 2} }).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
        
        db.close();
    });
    dbo.collection("employees").find(query).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
        //console.log(result[4].email);
        db.close();
    });*/

    dbo.collection("employees").find(query2).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
        //console.log(result[4].email);
        db.close();
    });
});