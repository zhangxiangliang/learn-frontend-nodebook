var memoize = function(foo) {
	var cache = {};
	return function() {
		var arg_str = JSON.stringify(arguments);
		cache[arg_str] = cache[arg_str] || foo.apply(foo, arguments);
		console.log(cache);
		return cache[arg_str];
	};
};

var pureHttpCall = memoize(function(url, params) {
	return function() {
		return $.getJSON(url, params);
	};
});
pureHttpCall("http://localhost:3000");


