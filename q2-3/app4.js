var fs = require('fs');

fs.readFile('../files/from.txt', 'utf8', function (err, contents1) {
    fs.readFile('../files/append.txt', 'utf8', function (err, contents2) {
        // let content = contents1 + " " + contents2;
        fs.writeFile('../files/to.txt', contents1, (err) => {
            if (err) throw err;
            fs.appendFile('../files/to.txt', contents2, function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
        });
    });

});