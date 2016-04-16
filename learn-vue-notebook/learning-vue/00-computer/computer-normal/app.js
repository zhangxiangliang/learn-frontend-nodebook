// 添加数字 Do
// 双目运算 Do
// 单目运算 Do
// 等号

// key => value
var computer = {
	char: '',
	number: document.getElementById('dontsquare'),
	number_before: '',
	addNumber: function(newNumber) {
		if(!this.number.value || !parseFloat(this.number.value) ) {
			this.number.value = '';
		}		
		this.number.value = this.number.value + newNumber + '';
	},
	single: function(char) {
		var number = parseFloat(this.number.value);
		if(char === 'reciprocal') {
			this.number.value = 1 / number + '';
		}
		else if(char === 'reverse') {
			this.number.value = -number + '';
		}
		else if(char === 'sqrt') {
			this.number.value = Math.sqrt(number);
		}
	},
	setChar: function(char) {
		this.char = char;
		this.number_before = this.number.value;
		this.number.value = char;
	},
	subStringNumber: function(number, precision){
		return number.substr(0, precision);
	},
	clearChar: function() {
		this.number.value = this.subStringNumber(this.number.value,this.number.value.length-1);
	},
	clearScreen: function() {
		this.number.value = '';
	},
	equal: function() {
		var number_before = parseFloat(this.number_before);
		var number_after  = parseFloat(this.number.value);
		if(this.char === '+') {
			this.number.value = number_before + number_after + '';
		}
		else if(this.char === '-') {
			this.number.value = number_before - number_after + '';
		}
		else if(this.char === '*') {
			this.number.value = number_before * number_after + '';
		}
		else if(this.char === '/') {
			this.number.value = number_before / number_after + '';
		}
		else if(this.char === '%') {
			this.number.value = (number_before % number_after) + '';
		}
		this.char = '';
	}
};