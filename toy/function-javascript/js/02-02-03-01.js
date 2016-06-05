// 判断存在
// 输入: 任意值
// 输出: true or false
// 说明: null, undefined => 返回 false
function existy(x) {
	return x != null;
}

// 判断为真
// 输入: 任意值
// 输出: true or false
// 说明: null, undefined, false => 返回 false
function truthy() {
	return (x !== false) && existy(x);
}

// 拼接函数 
// 输入: arguments
// 输出: array
function cat() {
	var head = _.first(arguments);
	if(existy(arguments))
		return head.concat.apply(head, _.rest(arguments));
	return [];
}

/* ----------------------------------------------------------------*/
// 非 applicative 
function construct(head, tail) {
	return cat([head], _.toArray(tail));
}
console.log(construct(4, [1, 2, 3]).sort());
// applicative 函数是需要传入一个函数
function mapcat(coll, fun) {
	return cat.apply(null, _.map(coll, fun));
}
var result = mapcat([1, 2, 3], function(e) {
	return construct(e, ['happly']);
});
console.log(result);
/* ----------------------------------------------------------------*/

function butLast(coll) {
	return _.toArray(coll).slice(0, -1);
}

function interpose(inter, coll) {
	return butLast(mapcat(coll, function(e) {
		return construct(e, [inter]);
	}));
}
console.log(interpose('lionis', [1, 2, 3]));