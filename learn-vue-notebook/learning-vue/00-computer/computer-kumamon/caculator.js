window.onload = function() {
	// 生成容器
	var container = document.createElement('div');
	container.style.width = '450px';
	container.style.background = 'linear-gradient(#2F2F2F, #2E2E2E)';
	container.style.overflow = 'auto';
	container.style.border = '1px solid #ccc';
	container.style.borderRadius = '5px';
	container.style.margin = '0 auto';
	
	// 生成显示框
	var head = document.createElement('div');
	var input = document.createElement('input');
	input.style.width = '435px';
	input.style.height = '90px';
	input.style.margin = '5px';
	input.style.borderRadius = '5px';
	input.style.background = '#fff url(start.png) no-repeat';
	input.style.backgroundSize = 'auto 90px';
	input.style.textAlign = 'right';
	input.style.fontSize = '35px';
	input.style.lineHeight = '90px';
	head.appendChild(input);

	// 生成按钮
	var body = document.createElement('div');
	var btnList = [
		'存储', '取存', '累存', '积存', '清存',
		'删除', '全清', '清屏', '+/-', '1/x',
		'7', '8', '9', '/', '%',
		'4', '5', '6', '*', '√',
		'1', '2', '3', '-', '=',
		'0', '.', '+'
	];
	var number_before = '';
	var char = '';
	var numbers = [];
	for(i=0; i<btnList.length; i++) {
		var btn = document.createElement('div');
		var innerHTML = btnList[i];

		// 默认按钮样式
		btn.style.background = '#2E2E2E';
		btn.style.border = '1px solid #FFF';
		btn.innerHTML = innerHTML;
		btn.style.cursor = 'pointer';
		btn.style.width = '78px';
		btn.style.color = '#fff';
		btn.style.height = '40px';
		btn.style.margin = '5px';
		btn.style.textAlign = 'center';
		btn.style.lineHeight = '40px';
		btn.style.float = 'left';
		btn.style.borderRadius = '5px';

		// 红色按钮
		if(innerHTML == '删除' || innerHTML == '全清' || innerHTML == '清屏') {
			btn.style.background = '#DB2828';
			btn.style.border = '1px solid #DB2828';
		}
		// 白色按钮
		else if(innerHTML == '+/-' || innerHTML == '1/x' ||
				innerHTML == '%' || innerHTML == '√' || innerHTML == '=') {
			btn.style.border = '1px solid #fff';
			btn.style.color = '#000';
			btn.style.background = '#fff';
		}
		// 特殊大小按钮
		if(innerHTML == '=') {
			btn.style.height = '93px';
			btn.style.float = 'right';
		}
		else if (innerHTML == '0') {
			btn.style.width = '168px';
		}

		// 为按钮添加功能
		// 数字按钮
		if(innerHTML == '0' || innerHTML == '1' || innerHTML == '2' || innerHTML == '3' ||
			innerHTML == '4' || innerHTML == '5' || innerHTML == '6' || innerHTML == '7' || 
			innerHTML == '8' || innerHTML == '9' || innerHTML == '.') {
			btn.onclick = function() {
				if(!input.value || !parseFloat(input.value) ) {
					input.value = '';
				}
				if(input.value.indexOf('.')!= -1 && this.innerHTML == '.'){
					return;
				}		
				input.value += this.innerHTML + '';
				input.style.background = '#fff url(input.png) no-repeat';
				input.style.backgroundSize = 'auto 90px';
				input.style.color = '#000';
			};
		}
		// 存储按钮
		else if(innerHTML == '存储') {
			btn.onclick = function() {
				numbers.push(input.value);
			};
		}
		// 取存按钮
		else if(innerHTML == '取存') {
			btn.onclick = function() {
				var value = numbers.pop();
				if(!value) {
					input.value = '木有存取数字';
					input.style.background = '#80CBAD url(error.png) no-repeat';
					input.style.backgroundSize = 'auto 90px';
					input.style.color = '#fff';
					return;
				}
				input.value = value;
			};
		}
		// 累存
		else if(innerHTML == '累存') {
			btn.onclick = function() {
				var length = numbers.length;
				if(!length) {
					input.value = '木有存取数字';
					input.style.background = '#80CBAD url(error.png) no-repeat';
					input.style.backgroundSize = 'auto 90px';
					input.style.color = '#fff';
					return;
				}
				var sum = 0;
				for(i=0; i<length; i++) {
					sum += parseFloat(numbers[i]);
				}
				input.value = sum + '';
				input.style.background = '#fff url(equal.png) no-repeat';
				input.style.backgroundSize = 'auto 90px';
				input.style.color = '#000';
			};
		}
		// 积存
		else if(innerHTML == '积存') {
			btn.onclick = function() {
				var length = numbers.length;
				if(!length) {
					input.value = '木有存取数字';
					input.style.background = '#80CBAD url(error.png) no-repeat';
					input.style.backgroundSize = 'auto 90px';
					input.style.color = '#fff';
					return;
				}
				var sum = 1;
				for(i=0; i<length; i++) {
					sum *= parseFloat(numbers[i]);
				}
				input.value = sum + '';
				input.style.background = '#fff url(equal.png) no-repeat';
				input.style.backgroundSize = 'auto 90px';
				input.style.color = '#000';
			};
		}
		// 清存
		else if(innerHTML == '清存') {
			btn.onclick = function() {
				numbers = [];
				input.value = '数据不见辣';
				input.style.background = '#FFF619 url(clear.png) no-repeat';
				input.style.backgroundSize = 'auto 90px';
				input.style.color = '#2E2E2E';
			};
		}
		// 全清
		else if(innerHTML == '全清') {
			btn.onclick = function() {
				numbers = [];
				number_before = '';
				char = '';
				input.value = '数据被本宝宝吃完了';
				input.style.background = '#FFF619 url(clear.png) no-repeat';
				input.style.backgroundSize = 'auto 90px';
				input.style.color = '#2E2E2E';
			};
		}
		// 等号按钮
		else if(innerHTML == '=') {
			btn.onclick = function() {
				var before = parseFloat(number_before);
				var after  = parseFloat(input.value);
				if(char === '+') {
					input.value = before + after + '';
				}
				else if(char === '-') {
					input.value = before - after + '';
				}
				else if(char === '*') {
					input.value = before * after + '';
				}
				else if(char === '/') {
					input.value = before / after + '';
				}
				else if(char === '%') {
					input.value = (before % after) + '';
				}
				if(!parseFloat(input.value)) {
					input.value = '你是不是傻';
					input.style.background = '#80CBAD url(error.png) no-repeat';
					input.style.backgroundSize = 'auto 90px';
					input.style.color = '#fff';
				} else {
					input.style.background = '#fff url(equal.png) no-repeat';
					input.style.backgroundSize = 'auto 90px';
					input.style.color = '#000';
				}
				char = '';
			}
		}
		// 单操作数
		else if (innerHTML == '+/-' || innerHTML == '1/x' || innerHTML == '√') {
			btn.onclick = function() {
				var number = parseFloat(input.value);
				var char = this.innerHTML;
				if(char === '1/x') {
					input.value = 1 / number + '';
				}
				else if(char === '+/-') {
					input.value = -number + '';
				}
				else if(char === '√') {
					input.value = Math.sqrt(number);
				}
				input.style.background = '#fff url(equal.png) no-repeat';
				input.style.backgroundSize = 'auto 90px';
				input.style.color = '#000';
			}
		}
		// 操作符
		else if (innerHTML == '%' || innerHTML == '/' || innerHTML == '*' || 
			innerHTML == '-' || innerHTML == '+') {
			btn.onclick = function () {
				char = this.innerHTML;
				number_before = input.value;
				input.value = char;
				input.style.color = '#000';
			}
		}
		// 删除
		else if (innerHTML == '删除') {
			btn.onclick = function() {
				var value = input.value;
				input.value = value.substr(0, value.length-1);
				input.style.color = '#000';
			}
		}
		// 清屏
		else if (innerHTML == '清屏') {
			btn.onclick = function() {
				input.value = '';
				input.value = '数字真好吃';
				input.style.background = '#FFF619 url(clear.png) no-repeat';
				input.style.backgroundSize = 'auto 90px';
				input.style.color = '#2E2E2E';			}
		}
		// 插入按钮
		body.appendChild(btn);
	}

	// 组装计算机
	container.appendChild(head);
	container.appendChild(body);

	// 获得需要插入的 #caculator 节点
	var caculator = document.getElementById('caculator');
	caculator.appendChild(container);
}