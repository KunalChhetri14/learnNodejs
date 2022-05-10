const fs = require('fs');

fs.appendFile('notes2.txt', 'Appending contents to file', err => {
    if(err) throw err;
    console.log("file append succesffully");
});
