const fs = require('fs');
const exportContent = require('./exportFile');

fs.appendFile('notes2.txt', 'Appending contents to file', err => {
    if(err) throw err;
    console.log("file append succesffully");
});

console.log(exportContent.add());
console.log("value is ", exportContent.a)


