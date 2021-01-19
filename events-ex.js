var fs = require('fs');
var rs = fs.createReadStream('./renamefile.txt');
rs.on('open', function(){
    console.log('the file is open');
});