import chalk from 'chalk';
// Define "require"
// const fs = require('fs');
import fs from 'fs';
// const exportContent = require('./exportFile');
import * as exportContent from './exportFile.js'
// const validator = require('validator');
// import validator from "validator/es/index.js";


fs.appendFile('notes2.txt', 'Appending contents to file again', err => {
    if(err) throw err;
    console.log("file append succesffully");
});

const email = "kunalchhetri14@gmail.com";

console.log(exportContent.add());
console.log("value is ", exportContent.a)

// console.log(validator.isEmail(email));

console.log(chalk.bold.red("Hello"))

console.log(process.argv);



