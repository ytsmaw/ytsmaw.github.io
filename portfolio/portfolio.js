
// landing page js

/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global alert: false, console: false, jQuery: false */

function projectsize(doresize){

    // getting the projects content the right size
    var w = $( document ).width();
        var contentw;
        if(w*0.2 > 300){
            contentw = w*0.8+0;
        }else{
            contentw = w-310;
        }
    if(doresize){
        document.getElementById('content').style.width = contentw;
        document.getElementById('projects-title').style.maxWidth = contentw-30;
    }
    
    // getting the projects title the right size
    //Text has over-flowed
    if ($('#projects-title')[0].scrollHeight >  50 ){
        document.getElementById('projects-title').style.top = '34px';
        //document.getElementById('projects-title').style.fontSize = '35px';
    }else{
       document.getElementById('projects-title').style.top = '80px';
        //document.getElementById('projects-title').style.fontSize = '40px';
    }
    
    //alert("window width: "+w+"<br>title width: "+document.getElementById('projects-title').style.width +"<br>assigned w: " + (contentw - 30) + "<br>scroll-width: " +$('#projects-title')[0].scrollWidth);
}


$( document ).ready( function() {
    
    var resize = true;
    
    // menu accordion function
    
    $( "#landingcontent" ).accordion({
		animate: true,
		decoration: false,
		collapsible: true,
		heightStyle: "collapsible",
        active: false
        
    });
    
    
    // things that happen only on project pages
    
    if(document.title !== "Willem Ytsma Portfolio Home"){
        $( "#landingcontent" ).accordion( "option", "active", 0 );
        ar = screen.width / screen.height;
        
        //what if it's on a phone?
        if(ar < 1){
            document.getElementById("menu").innerHTML = " ";
            document.getElementById("menu").style.minWidth = 0;
            document.getElementById("menu").style.width = 0;
            var list = document.getElementsByTagName('p');
            for(i=0; 1<list.length; i++){
                list[i].style.fontSize = 20;
            }
            resize = false;
        }
            projectsize(resize);
    }
    
    // stupid who cares
    //$("#jstest").click(function () {document.getElementById("jstest").innerHTML = "ah no i've been clicked"; });
    
    var isExpanded = false; 
    
    $("#about").click(function() {
        if(isExpanded == false){
            $("#menu").animate({
                'width' : '600px'
            }, 500);
            isExpanded = true;
        }else{
            var w = $( document ).width() * 0.2;
            var myw;
            if(w > 300){
                myw = w+"px";
            }else{
                myw = 300+"px";
            }
            $("#menu").animate({
                'width' : myw
            }, 500);
            isExpanded = false;
        } 
    });
        
    $(".menuHeader").click(function(){
        if(isExpanded == true){
            var w = $( document ).width() * 0.2;
            var myw;
            if(w > 300){
                myw = w+"px";
            }else{
                myw = 300+"px";
            }
            $("#menu").animate({
                'width' : myw
            }, 500);
            isExpanded = false;
        } 
    });
    
    
    //resizing the window
    window.onresize = function() { projectsize(true); }
        
  } );

//$( window ).resize(projectsize(true));

  