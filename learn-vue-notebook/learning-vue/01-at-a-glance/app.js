
new Vue({
	el: '#tasks',

	data: {
		tasks: [
			{body: "Go to the school", completed: false}
		],
		newTask: ""
	},

	computed: {
		completeds: function() {
			return this.tasks.filter(function(task) {
				return task.completed;
			});
		},
		uncompleteds: function() {
			return this.tasks.filter(function(task) {
				return ! task.completed;
			});
		}
	},

	filters: {
		inProcess: function(tasks) {
			return tasks.filter(function(task) {
				return !task.completed;
			});
		}
	},

	methods: {
		addTask: function() {

			if(this.newTask.trim() === '') return;
			this.tasks.push({
				body: this.newTask,
				completed: false
			});
			this.newTask = '';
		},

		editTask: function(task) {
			this.tasks.$remove(task);
			this.newTask = task.body;
			this.$els.newTask.focus();
		},

		completeTask: function(task) {
			task.completed = true;
		},

		removeTask: function(task) {
			this.tasks.$remove(task);
		},

		redoTask: function(task) {
			task.completed = false;
		},

		clearComplete: function() {
			this.tasks = this.tasks.filter(function(task) {
				return ! task.completed;
			});
		}
	}
})