
const fs = require('fs');
const {CreateFile} = require('./helpers/multiplicar');
const  argv = require('./config/yargs');
const colors = require('colors');


console.clear();


// const [,,arg3] = process.argv;
// const [,base] = arg3.split('=');

CreateFile(argv.b,argv.c,argv.l)
     .then(fileName => console.log(fileName.bold.blue, 'save'.bold.bgBrightGreen.underline))
     .catch(error => console.log(error))

