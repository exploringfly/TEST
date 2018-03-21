document.onkeydown = function (ev) {
    var box = document.getElementById('box');
    var Dovent = ev || event;
    if (Dovent.keyCode == 37) {
        box.style.left = box.offsetLeft - 10 + 'px';
    }
    if (Dovent.keyCode == 39) {
        box.style.left = box.offsetLeft + 10 + 'px';
    }
    if (Dovent.keyCode == 38) {
        box.style.top = box.offsetTop - 10 + 'px';
    }
    if (Dovent.keyCode == 40) {
        box.style.top = box.offsetTop + 10 + 'px';
    }
}