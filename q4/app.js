var fs = require('fs');

let fromNames = [];
let fromNumbers = [];
let res = [];
let names = [];

fs.readFile('./files/names.txt', 'utf8', function (err, contents1) {
    fs.readFile('./files/numbers.txt', 'utf8', function (err, contents2) {
        // let content = contents1 + " " + contents2;
        let lineNames = contents1.split("\n");
        let lineNumbers = contents2.split("\n");

        for (let i = 0; i < lineNames.length; i++) {
            let str = lineNames[i].split("-");
            fromNames.push(str);

        }

        for (let i = 0; i < lineNumbers.length; i++) {
            let str2 = lineNumbers[i].split("-");
            fromNumbers.push(str2);

        }

        for (let i = 0; i < fromNames.length; i++) {

            for (let j = 0; j < fromNumbers.length; j++) {
                let arr = [];

                if (fromNames[i][0] === fromNumbers[j][0]) {
                    arr.push(fromNames[i][0]);
                    arr.push(fromNames[i][1]);
                    arr.push(fromNumbers[j][1]);
                    res.push(arr);
                }

            }
        }

        console.log(fromNames);

        for (let i = 0; i < res.length; i++) {
            res[i][1] = res[i][1].replace("\r", "");
            if (res[i][2])
                res[i][2] = res[i][2].replace("\r", "");
        }


        for (let i = 0; i < res.length; i++) {
            let count = 0;
            for (let j = i + 1; j < res.length; j++) {
                if (res[i][0] === res[j][0]) {
                    if (res[j][2]) {
                        res[i].push(res[j][2])
                        res.splice(j, 1);
                    }
                }
            }
        }



        let data = "";

        for (let j = 0; j < res.length; j++) {
            if (res[j].length === 3)
                data += `${res[j][1]}s phone number is : ${res[j][2]}\n`
            else {
                data += `${res[j][1]}s phone numbers are : ${res[j][2]},`
                for (let i = 3; i < res[j].length; i++) {
                    data += `${res[j][i]}`
                }
                data += `\n`;
            }
        }


        console.log(data);
        fs.writeFile('./files/response.txt', data, (err) => {
            if (err) throw err;

        });

    });

});