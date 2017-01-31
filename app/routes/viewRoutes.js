const tasks = require('../entities/tasks/taskViewRoutes');

const initializeRoutes = (app) => {
	app.use('/', tasks);
	app.use('/tasks', tasks);
}

module.exports = initializeRoutes;