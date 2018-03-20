window.onload=function () {
    var box= document.getElementsByClassName("box");
    box.onmousedown = function () {
        box.onmousedown = function(ev){
            var oevent = ev || event;
            var distanceX = oevent.clientX -box.offsetLeft;
            var distanceY = oevent.clientY -box.offsetTop;
            document.onmousemove = function(ev){
                var oevent = ev || event;
               box.style.left = oevent.clientX - distanceX + 'px';
               box.style.top = oevent.clientY - distanceY + 'px';
            };
    }

}