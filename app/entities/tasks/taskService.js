const taskRepository = require('./taskRepository');

let validateRequest = (data) => {
	if(data && data.description){
		if(data.description.toLowerCase().indexOf('зрада') !== -1){
			return false;
		}
	}
	return true;
};

class TaskService {

	getAllTasks(){
		return taskRepository.findAll();
	}

	getTaskById(id){
		return taskRepository.findById(id);
	}

	editTask(id, task){
		if(!validateRequest(task)){
			return new Promise(function(resolve, reject) {
				reject();
			});
		}
		return taskRepository.update({_id: id}, task);
	}

	deleteTask(id){
		return taskRepository.delete({_id: id});
	}

	addTask(task){
		if(!validateRequest(task)){
			return new Promise(function(resolve, reject) {
				reject();
			});
		}
		return taskRepository.add(task);
	}
}

module.exports = new TaskService();