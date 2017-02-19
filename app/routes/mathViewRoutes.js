const express = require('express');
const math = express.Router();
const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
var socket = require('../common/Socket.js');

math.get('/', (req, res, next) => {
	var html = fs.readFileSync(path.join(__dirname + '/../../factorial/index.html'), 'utf8')
    res.send(html);
    var finished = false;
	
	var child = child_process.fork(__dirname + '/../../factorial/factorial.js');
	child.on('message', (result) => {
		if(result.status === 'finish'){
			console.log('factorial calculatin finished, result: ', result.factorial.toString());
			socket.emit('factorial-finish', result);
			finished = true;
		} else if(!finished){
			console.log('iteartion = ', result.iteration.toString());
			console.log(', result = ', result.factorial.toString());
			socket.emit('factorial-iteration', result);
		}
		res.end();
	})
});

module.exports = math;
