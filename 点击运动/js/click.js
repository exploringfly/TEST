function starRun(iTarget) {
	var timer = null;
	clearInterval(timer);
	timer = setInterval(
		function() {
			var box1 = document.getElementById('box1');
			var speed;
			if(box1.offsetLeft < iTarget) {
				speed = 7;
			} else {
				speed = -7;
			}
			if(Math.abs(iTarget -box1.offsetLeft ) <= 7) {
				clearInterval(timer);
				box1.style.left = iTarget + 'px';
			} else {
				box1.style.left = box1.offsetLeft + speed + 'px';
			}
		}, 30);
}