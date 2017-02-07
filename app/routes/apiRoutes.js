const tasks = require('../entities/tasks/taskRoutes');

const initializeRoutes = (app) => {
	app.use('/api/task', tasks);
}

module.exports = initializeRoutes;