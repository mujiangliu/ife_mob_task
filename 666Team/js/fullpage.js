/**
 * Created by Ryq on 2015/7/17.
 */
var page1 = document.getElementById("intro");
var page2 = document.getElementById("first");
init = function() {
    var pageRange = {
        X : document.documentElement.clientWidth || window.innerWidth,
        Y : document.documentElement.clientHeight || window.innerHeight
    }
    page1.style.height = pageRange.Y + 'px';
    page2.style.height = pageRange.Y + 'px';
}
init();
window.onresize=init;