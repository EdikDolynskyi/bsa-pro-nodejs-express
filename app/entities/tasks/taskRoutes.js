const express = require('express');
const task = express.Router();

const taskService = require('./taskService');

task.get('/', (req, res, next) => {
	taskService.getAllTasks().then((tasks) => {
		res.send(tasks);
	}).catch((err) => {
		res.status(400).end();
	});
});

// task.post('/', (req, res, next) => {
// 	taskService.addtask(req.body).then((task) => {
// 		res.status(201).send(task);
// 	}).catch((err) => {
// 		res.status(400).end();
// 	});
// });

// task.get('/:id', (req, res, next) => {
// 	taskService.gettaskById(req.params.id).then((task) => {
// 		res.send(task);
// 	}).catch((err) => {
// 		res.status(400).end();
// 	});
// });

// task.put('/:id', (req, res, next) => {
// 	taskService.edittask(req.params.id, req.body).then(() => {
// 		res.end();
// 	}).catch((err) => {
// 		res.status(400).end();
// 	});
// });

// task.delete('/:id', (req, res, next) => {
// 	taskService.deletetask(req.params.id).then(() => {
// 		res.status(200).end();
// 	}).catch((err) => {
// 		res.status(400).end();
// 	});
// });

module.exports = task;
