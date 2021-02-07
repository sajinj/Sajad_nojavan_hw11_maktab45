var fs = require('fs');
 
fs.readFile('../files/from.txt', 'utf8', function(err, contents) {
    console.log(contents);
    fs.writeFile('../files/to.txt', contents, (err) => {
        if (err) throw err;
    
    });
});