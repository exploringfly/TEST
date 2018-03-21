window.onscroll = function() {
	var box1 = document.getElementById('box1');
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	//	box1.style.top = (document.documentElement.clientHeight - box1.offsetHeight)/2 + scrollTop + 'px';
	//parseInt()取整，除以2是为了居中设置
	starRun(parseInt((document.documentElement.clientHeight - box1.offsetHeight) / 2 + scrollTop));
}

var timer = null;

function starRun(iTarget) {
	clearInterval(timer);
	var box1 = document.getElementById('box1');
	timer = setInterval(function() {
		var speed = (iTarget - box1.offsetTop) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(box1.offsetTop == iTarget) {
			clearInterval(timer);
		} else {
			box1.style.top = box1.offsetTop + speed + 'px';
		}
	}, 30);
}