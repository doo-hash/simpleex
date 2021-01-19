var events = require('events');
var eventemitter = new events.EventEmitter();

var myeventhandler = function(){
    console.log('i hear ascream!!');
}

eventemitter.on('scream', myeventhandler);
eventemitter.emit('scream');