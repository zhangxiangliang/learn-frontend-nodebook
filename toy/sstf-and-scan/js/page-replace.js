// 初始化效果
$('#boxs').mixItUp({
	selectors: {
		target: '.box'
	}
});
setTimeout(function() {
	$('#minis').mixItUp({
		selectors: {
			target: '.mini'
		}
	});
},1000);
