new Vue({
	el: "#demo",
	data: {
		sortKey: '',
		reverse: -1,
		search:"",
		columns: [
			{cn: "姓名", en: "name"},
			{cn: "年龄", en: "age"}
		],
		peoples: [
			{name: '翔', age: 20},
			{name: '宝宝', age: 21},
			{name: '大叔', age: 22},
			{name: '大大叔', age: 22},
			{name: '阿叉', age: 23},
			{name: '凯子', age: 24}
		]
	},
	methods: {
		sortBy: function (sortKey) {
			if (this.sortKey === sortKey) {
				if(this.reverse === 1)
					this.reverse = -1;
				else 
					this.reverse = 1;
			} else {
				this.reverse = -1;
			}
			this.sortKey = sortKey;
		}
	}
});