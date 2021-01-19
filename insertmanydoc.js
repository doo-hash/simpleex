var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/27017/";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobj = [{_id : 2, firstname : "soumya", lastname : "maachannagaari", email : "soumya234@gmail.com"},
                 {_id : 3, firstname : "swetha", lastname : "bonagiri", email : "swetha34@gmail.com"},
                 {_id : 4, firstname : "uma", lastname : "bonagiri", email : "uma24@gmail.com"},
                 {_id : 5, firstname : "srujana", lastname : "biyya", email : "srujana234@gmail.com"}
];

dbo.collection("employees").insertMany(myobj, function(err, res){
    if(err) throw err;
    console.log('no. of docs inserted : ' + res.insertedCount);
    console.log(res);
    db.close();
});
});