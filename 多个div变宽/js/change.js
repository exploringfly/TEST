window.onload = function() {
	var box = document.getElementsByTagName('div');
	for(var i = 0; i < box.length; i++) {
		//给每一个div加一个定时器，避免出现定时器的混用
		box[i].timer = null;
		//加事件
		box[i].onmouseover = function() {
			move(this, 500);
		}
		box[i].onmouseout = function() {
			move(this, 100);
		}
	}

}

//var timer = null;

//给每一个div加定时器后，定时器的关闭也应改为某个的定时器关闭，obj.timer；
function move(obj, iTarget) {
	clearInterval(obj.timer);
	obj.timer = setInterval(go, 30);

	function go() {
		var speed = (iTarget - obj.offsetWidth) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(obj.offsetWidth == iTarget) {
			clearInterval(obj.timer);
		} else {
			obj.style.width = obj.offsetWidth + speed + 'px';
		}
	}

}