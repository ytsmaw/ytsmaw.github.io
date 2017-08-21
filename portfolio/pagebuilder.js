$(function(){
    //get all the important stuff from the page
    var pagetitle = document.getElementById("title").innerHTML;
    var pageheadimg = document.getElementById("headimage").innerHTML;
    var pagecontent = document.getElementById("pcontent").innerHTML;
    //delete it and start over!
    $( document ).load("projects-template.html")
    //put it back in the page!
    document.getElementById("projects-title").innerHTML = pagetitle;
    document.getElementById("content-story").innerHTML = pagecontent;
    document.getElementById("content-top").style.backgroundImage = "url("+pageheadimg+")";
    
});