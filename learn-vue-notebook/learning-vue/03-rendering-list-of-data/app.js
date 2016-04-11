new Vue({
	el: '#demo',

	data: {
		names: ['lionis', 'lecat', 'jane', 'mike', 'cury']
	},

	methods: {
		addName: function() {
			if(this.newName.trim() === '') return;
			this.names.push(this.newName);
			this.newName = '';
		}
	}

});