// applicative 编程
// 典型例子： map, reduce, filter
var nums = [1, 2, 3, 4, 5];

function doubleAll(array) {
	return _.map(array, function(num) {
		return num * 2;
	});
}
console.log(doubleAll(nums));

function average(array) {
	var sum = _.reduce(array, function(a, b) {
		return a + b;
	});
	return sum / _.size(array);
}
console.log(average(nums));

function onlyEven(array) {
	return _.filter(array, function(num) {
		return (num % 2) == 0;
	});
}
console.log(onlyEven(nums));