var newscroll = 0;
var oldscroll =0;

function hashplus(pix){
    if (newscroll-oldscroll>100){
        window.scrollTo(window.scrollX, window.scrollY-pix);
    }
    oldscroll=newscroll;
}