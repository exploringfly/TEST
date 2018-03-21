function tabSwitch(id) {
    var _this = this;
    var big = document.getElementById(id);
    this.odiv = big.getElementsByTagName("div");
    this.oipt = big.getElementsByTagName("input");
    for (var i = 0; i < this.oipt.length; i++) {
        this.oipt[i].index = i;
        this.oipt[i].onclick = function () {
            _this.fnClick(this);
        }
    }
}

tabSwitch.prototype.fnClick = function (oipt) {
    for (var i = 0; i < this.oipt.length; i++) {
        this.odiv[i].style.display = "none";
        this.oipt[i].className = "";
    }
    this.odiv[oipt.index].style.display = "block";
    oipt.className = 'active';
}