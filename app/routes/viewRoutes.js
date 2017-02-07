const tasks = require('../entities/tasks/taskViewRoutes');

const initializeRoutes = (app) => {
	app.use('/', tasks);
	app.use('/task', tasks);
}

module.exports = initializeRoutes;