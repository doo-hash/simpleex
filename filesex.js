var fs = require('fs');

/*fs.appendFile('newfile1.txt', 'hello souji!!', function(err){
    if (err) throw err;
    console.log('saved!');
} );*/

fs.open('newfile2.txt', 'w', function(err, file){
    if (err) throw err;
    console.log('saved!!');
});

/*fs.writeFile('newFile3.txt', 'good fellow', function(err){
    if (err) throw err;
    console.log('saved!!!');
});*/

fs.appendFile('newfile1.txt', 'changing the text...', function(err){
    if (err) throw err;
    console.log('updated!');
} );

fs.writeFile('newFile3.txt', 'replacing the text...', function(err){
    if (err) throw err;
    console.log('replaced!!');
});

fs.unlink('newfile2.txt', function(err){
    if (err) throw err;
    console.log('file deleted.');
});

fs.rename('newfile1.txt', 'renamefile.txt', function(err){
    if (err) throw err;
    console.log('file renamed.');
});
