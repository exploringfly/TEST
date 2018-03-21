window.onload = function () {
    var box = document.getElementsByClassName("box");
    var btn = document.getElementsByTagName("input");
    for (var i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].onclick = function () {
            for (var i = 0; i < btn.length; i++) {
                box[i].style.display = "none";
                btn[i].className = "";
            }
            box[this.index].style.display = "block";
            this.className = 'active';
        }
    }
}

