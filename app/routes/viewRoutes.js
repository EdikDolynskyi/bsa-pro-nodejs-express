const tasks = require('../entities/tasks/taskViewRoutes');
const math = require('./mathViewRoutes');

const initializeRoutes = (app) => {
	app.use('/math', math);
	app.use('/', tasks);
	app.use('/task', tasks);
}

module.exports = initializeRoutes;