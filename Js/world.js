
window.onload=function(){
    var Cul = document.getElementById("TabMenuCon71");
    var aLi = Cul.children;
    for (i=0;i<aLi.length;i++) {
        aLi[i].onmouseover = function () {
            this.children[0].style.display = 'block';
        };
        aLi[i].onmouseout = function () {
            this.children[0].style.display = 'none';
        };
    }
};