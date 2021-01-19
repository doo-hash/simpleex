var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/27017/";

/*MongoClient.connect(url, function(err, db){
    if(err) throw err;

    var dbo = db.db("mydb");
    var mysort = { firstname : 1 }; //ascending

    dbo.collection("employees").find().sort(mysort).toArray(function(err, result){
        if(err) throw err;
       console.log(result);
       db.close();

    });*/

    MongoClient.connect(url, function(err, db){
        if(err) throw err;
    
        var dbo = db.db("mydb");
        var mysort = { firstname : -1 }; //descending
    
        dbo.collection("employees").find().sort(mysort).toArray(function(err, result){
            if(err) throw err;
           console.log(result);
           db.close();
    
        });

})