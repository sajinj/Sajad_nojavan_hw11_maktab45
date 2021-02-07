const fs = require('fs');


const data1 = fs.readFileSync('../files/from.txt',
    { encoding: 'utf8' }
);

const data2 = fs.readFileSync('../files/append.txt',
    { encoding: 'utf8' }
);

// let data = data1 + " " + data2;
fs.writeFileSync("../files/to.txt", data1);
fs.appendFileSync('../files/to.txt', data2);
