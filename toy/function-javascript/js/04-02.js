
// 1. 闭包内值不变
// 2. 每个闭包值不同
function always(value) {
	return function() {
		return value;
	}
}
var fun1 = always({});
// console.log(fun1() == fun1());
var fun2 = always({});
// console.log(fun1() == fun2());

// invoker 接受一个方法，并在任何给定的对象上调用它
function invoker(name, method) {
	return function(target) {
		var targetMethod = target[name];
		var args = _.rest(arguments);
		if(!existy(target))
			fail("Must provide a target");

		return doWhen((existy(targetMethod) && method == targetMethod), function() {
			return targetMethod.apply(target, args);
		});
	};
}
var rev  = invoker('reverse', Array.prototype.reverse);
console.log(rev([1, 2, 3]));

// 配置一个用于加法的函数
function makeAdder(val) {
	return function(n) {
		return val + n;
	}
}
var add100 = makeAdder(100);
console.log(add100(40));
console.log(add100(30));

// 生成随机字符串
function uniqueRandomString(len) {
	return Math.random().toString(36).substr(2, len);
}
console.log(uniqueRandomString(10));

// 如果要生成特定值
function uniquePrefixString(prefix) {
	return [prefix, new Date().getTime()].join('-');
}
console.log(uniquePrefixString('lionis'));

// 生成特定qianzu