new Vue({
	el: "#post",

	data: {
		isVisible: true,
		likeNumber: 0,
		unlikeNumber: 0,
		liked: false,
		unliked: false,
	},

	methods: {
		toggleLike: function () {
			// 如果再次被选中
			if(this.liked) {
				this.likeNumber--;
			} else {
				// 如果换选
				if(this.unliked == true) {
					this.unliked = false;
					this.unlikeNumber--;
				}
				this.likeNumber++;
			}
			this.liked = ! this.liked;
		},
		toggleUnLike: function() {
			// 如果再次被选中
			if(this.unliked) {
				this.unlikeNumber--;
			} else {
				// 如果换选
				if(this.liked == true) {
					this.liked = false;
					this.likeNumber--;
				}
				this.unlikeNumber++;
			}	
			this.unliked = ! this.unliked;
		}
	}
});
new Vue({
	el: "#post1",

	data: {
		isVisible: true,
		likeNumber: 0,
		unlikeNumber: 0,
		liked: false,
		unliked: false,
	},

	methods: {
		toggleLike: function () {
			// 如果再次被选中
			if(this.liked) {
				this.likeNumber--;
			} else {
				// 如果换选
				if(this.unliked == true) {
					this.unliked = false;
					this.unlikeNumber--;
				}
				this.likeNumber++;
			}
			this.liked = ! this.liked;
		},
		toggleUnLike: function() {
			// 如果再次被选中
			if(this.unliked) {
				this.unlikeNumber--;
			} else {
				// 如果换选
				if(this.liked == true) {
					this.liked = false;
					this.likeNumber--;
				}
				this.unlikeNumber++;
			}	
			this.unliked = ! this.unliked;
		}
	}
});