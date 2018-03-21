window.onload = function () {
    var note = document.getElementById('note');
    document.onclick = function (ev) {
        var Dovent = ev || event;//兼容写法，前者为IE，后者其余的
        note.style.left = Dovent.clientX + 'px';
        note.style.top = Dovent.clientY + 'px';
        //取消冒泡,多重元素嵌套的时候适用
        Dovent.cancelBubble = true;
    }
}