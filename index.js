var path = require('path');
const hello = require('./test/npm-hello');

console.log('sep:', path.sep);

//hello.title = 'this is a test';
hello.testall();

hello.title = 'tools2 ';
hello.testall();


