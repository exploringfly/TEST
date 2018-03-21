window.onload = function () {
    var box = document.getElementById('box');
    box.onkeydown = function (ev) {
        var Dovent = ev || event;
        if (Dovent.keyCode != 8 && (Dovent.keyCode < 48 || Dovent.keyCode > 57)) {
            return false;
        }
    }
}