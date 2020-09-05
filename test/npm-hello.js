const tools = require('woodw-npm-hello');

const test = {

    title: 'tools ',
    testall: function(){
        tools.hello(this.title + 'hello boy');
        tools.say(this.title, 'hello', 'world', '!');
    }
};

module.exports = test;

