window.onload = function () {
    var box1 = document.getElementById('box1');
    box1.onmouseover = function () {
        move(this, 'width', 600, function () {
            move(this, 'opacity', 100);
        });
    }
    box1.onmouseout = function () {
        move(this, 'opacity', 30, function () {
            move(this, 'width', 30);
        });
    }

}

function getStyle(obj, name) {
    //IE写法
    if (obj.currentStyle) {
        return obj.currentStyle[name];

    } else {
        //标准
        return getComputedStyle(obj, false)[name];
    }
}

function move(obj, attr, iTarget, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(go, 300);

    function go() {
        var atrs = 0;
        if (attr == 'opacity') {
            atrs = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            atrs = parseInt(getStyle(obj, attr));
        }

        var speed = (iTarget - atrs) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (atrs == iTarget) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        } else {
            atrs += speed;
            if (attr == 'opacity') {
                //兼容IE的写法
                obj.style.filter = 'alpha(opacity:' + atrs + ')';
                //标准
                obj.style.opacity = atrs / 100;
            } else {
                obj.style[attr] = atrs + speed + 'px';
            }

        }
    }

}