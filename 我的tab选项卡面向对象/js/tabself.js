//首先抓取每个元素
function Tab() {
    this.GetElement();
}

Tab.prototype.GetElement = function () {
    this.btn = document.getElementsByTagName("input");
    this.box = document.getElementsByClassName("box");
    for(var i = 0; i < btn.length; i++){
        this.btn[i].onclick = function () {
            this.btn[i].clc();
        }
    }
}

Tab.prototype.clc = function () {
    for(var i = 0; i < this.btn.length; i++){
        this.btn[i].index = i;
        this.btn[i].className = "";
        this.box[i].style.display = "none";
    }
    this.btn[this.index].className = "active";
    this.box[this.index].style.display = "block";

}