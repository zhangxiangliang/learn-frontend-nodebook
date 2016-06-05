var echo;
var zombie = {
	name: "Bob",
	film: "Day of the Dead"
};
var books =  [
	{
		title: 'Chthon',
		author: 'Anthony'
	},
	{
		title: 'Grendel',
		author: 'Gardner'
	},
	{
		title: 'Hard',
		author: 'Lionis'
	}
];

// _.keys 接受一个对象
echo = _.keys(zombie);
console.log('_.keys 函数 => ');
console.log(echo);

function keys(object) {
	return _.map(object, function(val, key) {
		return key;
	});
}
echo = keys(zombie);
console.log('key 函数 => ');
console.log(echo);


// _.values 接受一个对象
echo = _.values(zombie);
console.log('_.values 函数 => ');
console.log(echo);

function values(object) {
	return _.map(object, function(val, key) {
		return val;
	});
}
echo = values(zombie);
console.log('values 函数 => ');
console.log(echo);


// _.pluck 查询关键词, 接收一个对象数组
echo = _.pluck(books, 'title');
console.log('_.pluck 函数 => ');
console.log(echo);
function findPluck(object, propertyName) {
	return object[propertyName];
}
function pluck(list, propertyName) {
	return _.map(list, function(val) {
		return findPluck.apply(null, [val, propertyName]);
	});
}
echo = pluck(books, 'title');
console.log('pluck 函数 => ');
console.log(echo);

// _.pairs 接受一个对象，并将其变为嵌套数组
echo = _.pairs(zombie);
console.log(echo);