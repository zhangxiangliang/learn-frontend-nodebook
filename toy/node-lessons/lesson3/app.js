var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();
app.get('/', function (req, res, next) {
	superagent.get('https://cnodejs.org/')
		.end(function (err, sres) {
			if (err) return next(err);
			console.log('get success... \n');
			var $ = cheerio.load(sres.text);
			var items = [];
			$('#topic_list .cell').each(function (index, element) {
				console.log([index, element].join(' '));
				var $element = $(element);
				var user = $element.find($('.user_avatar img')).attr('title');
				var content = $element.find($('.topic_title'));
				var title = content.attr('title');
				var href = content.attr('href');
				items.push({
					id: index,
					user: user,
					title: title,
					href: href
				});
			});
			res.send(items);
		});
});

app.listen(3000, function () {
	console.log('app is running... \n');
});