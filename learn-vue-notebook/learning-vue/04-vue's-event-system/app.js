new Vue({
	el: "#demo",

	methods: {
		touchMe: function() {
			alert("警察叔叔，这边有变态碰我！");
		},
		keyUpEnter: function() {
			if(this.i_love_you == 'i love you') {
				alert("i love you too");
			}
			else {
				alert("i don't love you");
			}
		}
	}
});