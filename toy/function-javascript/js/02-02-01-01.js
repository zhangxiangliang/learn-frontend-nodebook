// It is better to have 100 functions operate on one data structure 
// than 10 functions on 10 data structures
// 用 100 个函数操作一个数据结构，比用 10 个函数操作 10 个数据结构要好。

// 需要建立一个统一的处理形式
var array;

array = _.map({a : 1, b : 2, c : 3}, _.identity);
console.log(array);

array = _.map({a : 1, b : 2, c : 3}, function(value, key) {
	return [key, value];
});
console.log(array);

array = _.map({a : 1, b : 2, c : 3}, function(value, key, coll) {
	return [key, value, _.keys(coll)];
});
console.log(array);