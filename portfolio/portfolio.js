
// landing page js

/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global alert: false, console: false, jQuery: false */

function projectsize(){

    // getting the projects content the right size
    var w = $( document ).width();
        var contentw;
        if(w*0.2 > 300){
            contentw = w*0.8-5;
        }else{
            contentw = w-310;
        }
    document.getElementById('content').style.width = contentw;
    document.getElementById('projects-title').style.maxWidth = contentw-30;
    //alert(document.getElementById('projects-title').style.width + ' ' + $('#projects-title')[0].scrollHeight);
    
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
    
    
    // menu accordion function
    
    $( "#landingcontent" ).accordion({
		animate: true,
		decoration: false,
		collapsible: true,
		heightStyle: "collapsible",
        active: false
        
    });
    
    
    // things that happen only on project pages
    
    if(document.title != "Willem Ytsma Portfolio Home"){
        $( "#landingcontent" ).accordion( "option", "active", 0 );
        projectsize();
    }
    
    // stupid who cares
    //$("#jstest").click(function () {document.getElementById("jstest").innerHTML = "ah no i've been clicked"; });
    
    var isExpanded = false; 
    
    $("#about").click(function() {
        if(isExpanded == false){
            $("#landingm").animate({
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
            $("#landingm").animate({
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
            $("#landingm").animate({
                'width' : myw
            }, 500);
            isExpanded = false;
        } 
    });
    
    $( window ).resize(projectsize);
        
  } );


  