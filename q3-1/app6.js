var fs = require('fs');

fs.writeFile('../files/newfile.txt', '', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');

    const path = "../files/newfile.txt"

    fs.access(path, error => {
        if (!error) {
            console.log("File exists.")

        } else {
            console.log("File does not exist.")

        }
    });

}); 
    // if (fs.existsSync(path)) {
    //     console.log("File exists.")
    // } else {
    //     console.log("File does not exist.")
    // }

