const tasks = require('../entities/tasks/taskRoutes');

const initializeRoutes = (app) => {
	app.use('/api/tasks', tasks);
}

module.exports = initializeRoutes;