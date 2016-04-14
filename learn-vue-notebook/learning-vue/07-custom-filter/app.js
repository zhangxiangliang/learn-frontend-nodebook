// 在 Vue 上绑定函数
Vue.filter('reverse', function(value, wordsOnly) {
	var separator = wordsOnly ? ' ' : '';
	return value.split(separator).reverse().join(separator);
});
new Vue({
	el: '#demo',
	data: {
		message: "U love I",
	}
});
new Vue({
	el: '#demo2',
	data: {
		gender: '全部',
		peoples: [
			{name : "张翔亮", gender : "男"},
			{name : "叶诗婷", gender : "女"},
			{name : "陈旭", gender : "男"},
			{name : "吴伟涛", gender : "男"},
			{name : "洪琪磷", gender : "男"},
			{name : "别圆", gender : "女"}
		]
	},
	filters: {
		gender: function(peoples){
			if(this.gender == '全部')  return peoples;
			return peoples.filter(function (people) {
				return people.gender == this.gender;
			}.bind(this));
		}
	}
});