function Tab() {
    this.getElement();
}

Tab.prototype.getElement = function () {
    this.btns = document.getElementsByTagName('input');
    this.boxes = document.getElementsByClassName('box');
    this.addEvent();
};

Tab.prototype.addEvent = function () {
    for (var i = 0 ; i < this.btns.length ; i++){
        var _this = this;
        this.btns[i].onclick = function () {
            console.log(this);
            // this.btns
            _this.things(this);
        };
    }
};

Tab.prototype.things = function (that) {
    for (var i =0 ; i< this.btns.length ;i++){
        this.btns[i].index = i;
        this.btns[i].className = '';
        this.boxes[i].style.display = 'none';
    }
    that.className = 'active';
    this.boxes[that.index].style.display = 'block';
};