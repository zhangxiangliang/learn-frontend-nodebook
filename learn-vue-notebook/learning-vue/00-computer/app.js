new Vue({
	el: '#app',

	data: {
		number: '',
		number_before: '',
		number_after: '',
		char: '',
		store: [],
	},

	methods: {
		storeNumber: function() {
			this.store.push(this.number);
		},
		takeNumber: function() {
			this.number = this.store.pop();
		},
		storeMethod: function(method) {
			if(this.store.length === 0) {
				this.number = "没有存储数值";
				return;
			}

			var i = 0,
				sum = NaN,
				len = this.store.length;
			if(method === "add") {
				sum = 0;
				for(i=0; i<len; i++) {
					Kindasum += parseFloat(this.store[i]);
				}
			}
			else if(method === 'mult') {
				sum = 1;
				for(i=0; i<len; i++) {
					sum *= parseFloat(this.store[i]);
				}
			}
			this.number = sum + '';
		},
		clearStore: function() {
			this.store = [];
		},
		clearAll: function() {
			this.number = '';
			this.number_after = '';
			this.number_before = '';
			this.char = '';
			this.store = [];
		},
		clearScreen: function() {
			this.number = '';
		},
		clearNumber: function() {
			this.number_before = '';
			this.number_after = '';
			this.char = '';
		},
		setChar: function(char) {
			if(this.char !== '') {
				this.equal();
			}

			if(this.number_before === '' && !parseFloat(this.number)) {
				this.number = '缺少运算数'; 
				return;
			}
			this.char = char;
			this.number_before = this.number;
			this.number = char;
		},
		addNumber: function(addNumber) {
			if(!parseFloat(this.number)) {
				this.number = '';
			}
			this.number = '' + this.number + addNumber;
		},
		delNumber: function() {
			this.number = this.number.substr(0, this.number.length-1);
		},
		single: function(char) {
			var number = parseFloat(this.number);
			if(!number) {
				this.number = '缺少运算数'; 
				return;
			}
			if(char === 'reciprocal') {
				this.number = 1 / number + '';
			}
			else if(char === 'reverse') {
				this.number = 0 - number + '';
			}
			else if(char === 'sqrt') {
				this.number = Math.sqrt(number) + '';
			}
		},
		equal: function() {
			this.number_after = parseFloat(this.number);
			this.number_before = parseFloat(this.number_before);
			if(this.char === '+') {
				this.number = this.number_before + this.number_after + ''; 
			}
			else if(this.char === '-') {
				this.number = this.number_before - this.number_after + ''; 
			}
			else if(this.char === '*') {
				this.number = this.number_before * this.number_after + ''; 
			}
			else if(this.char === '/') {
				this.number = this.number_before / this.number_after + ''; 
			}
			else if(this.char === '%') {
				this.number = this.number_before % this.number_after + ''; 
			}
			this.clearNumber();
		}
	}
});