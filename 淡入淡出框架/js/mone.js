window.onload = function () {
    var box = document.getElementsByTagName('div');
    for (var i = 0; i < box.length; i++) {
        box[i].alpha = 30;
        box[i].onmouseover = function () {
            cli(this, 100);
        }
        box[i].onmouseout = function () {
            cli(this, 30);
        }
    }

}

//多物体运动，所有东西均不能公用，属性与运动对象绑定：速度、属性值；box[i].alpha = 30;

function cli(obj, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInter
    val(go, 300);

    function go() {
        var speed = (iTarget - obj.alpha) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (obj.alpha == iTarget) {
            clearInterval(obj.timer);
        } else {
            obj.alpha += speed;
            //兼容IE的写法
            obj.style.filter = 'alpha(opacity:' + obj.alpha + ')';
            //标准
            obj.style.opacity = obj.alpha / 100;

        }

    }

}