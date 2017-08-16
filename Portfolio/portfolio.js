
// landing page js

/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global alert: false, console: false, jQuery: false */



$( document ).ready( function() {
    
    // menu accordion function
    $( "#landingcontent" ).accordion({
		animate: false,
		decoration: false,
		collapsible: true,
		heightStyle: "collapsible",
        active: false
        
    });
    
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
    
    
  } );
  