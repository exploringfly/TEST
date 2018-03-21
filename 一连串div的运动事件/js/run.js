window.onload = function (ev) {

    function getPos(ev) {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        return {x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop};
    }

    document.onmousemove = function (ev) {
        var box = document.getElementsByTagName('div');
        var Dovent = ev || event;
        for (var i = box.length - 1; i > 0; i--) {
            box[i].style.top = box[i - 1].offsetTop + 'px';
            box[i].style.left = box[i - 1].offsetLeft + 'px';
        }
        var pos = getPos(Dovent);
        box[0].style.left = pos.x + 'px';
        box[0].style.top = pos.y + 'px';
    }
}