var val;

// 循环打印
// 接受 打印次数 和 打印值
function repeat(times, value) {
	return _.map(_.range(times), function() {
		return value;
	});
}
console.log(repeat(3, "411er"));

// 如果打印的值不是固定的呢？
function repeatedly(times, fun) {
	return _.map(_.range(times), fun);
}

val = repeatedly(6, function(n) {
	var max = 6;
	var	min = 1;
	return Math.floor((Math.random() * (max - min)) + min);
});
console.log(val);

// 如果打印的次数不知道到呢？
function iterateUntil(fun, check, init) {
	var ret = [];
	var result = fun(init);
	while(check(result)) {
		ret.push(result);
		result = fun(result);
	}
	return ret;
}
val = iterateUntil(function(n) 
	{
		return n + 2;
	}, function(n) {
		return (n <= 1024);
	},0);
console.log(val);