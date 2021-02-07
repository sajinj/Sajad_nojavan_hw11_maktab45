const fs = require('fs');


const data = fs.readFileSync('../files/from.txt',
    { encoding: 'utf8' }
);

fs.writeFileSync("../files/to.txt", data);
console.log(data); 