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

task.post('/', (req, res, next) => {
	taskService.addTask(req.body).then((task) => {
		res.status(201).send(task);
	}).catch((err) => {
		res.status(400).end('Bad request! Bed description. Ochenj bed description.\nSee detail: https://imagecdn1.luxnet.ua/tv24/resources/photos/news/620_DIR/201701/773845_1600039.jpg?201701140946');
	});
});

task.get('/:id', (req, res, next) => {
	taskService.getTaskById(req.params.id).then((task) => {
		res.send(task);
	}).catch((err) => {
		res.status(400).end();
	});
});

task.put('/:id', (req, res, next) => {
	taskService.editTask(req.params.id, req.body).then(() => {
		res.end();
	}).catch((err) => {
		res.status(400).end('Bad request! Bed description. Ochenj bed description.\nSee detail: https://imagecdn1.luxnet.ua/tv24/resources/photos/news/620_DIR/201701/773845_1600039.jpg?201701140946');
	});
});

task.delete('/:id', (req, res, next) => {
	taskService.deleteTask(req.params.id).then(() => {
		res.status(200).end();
	}).catch((err) => {
		res.status(400).end();
	});
});

module.exports = task;