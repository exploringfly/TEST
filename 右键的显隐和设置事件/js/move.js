window.onload = function () {

    //清除右键行为
    document.oncontextmenu = function (ev) {
        var note = document.getElementById('note');
        var Dovent = ev || event;//兼容写法，前者为IE，后者其余的
        note.style.display = 'block';
        note.style.left = Dovent.clientX + 'px';
        note.style.top = Dovent.clientY + 'px';
        return false;
    }
    document.onclick = function (ev) {
        var note = document.getElementById('note');
        note.style.display = 'none';
    }
}