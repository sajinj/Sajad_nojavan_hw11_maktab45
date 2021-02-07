var fs = require('fs');

fs.writeFile('../files/newfile.txt', '', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');

    const path = "../files/newfile.txt"

    if (fs.existsSync(path)) {
        // Do something
        console.log("File exists.")

    }else{
        console.log("File does not exist.")

    }

});


