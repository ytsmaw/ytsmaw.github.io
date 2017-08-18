
// landing page js

/*jslint browser: true*/
/*global $, jQuery, alert*/
/*global alert: false, console: false, jQuery: false */

function stats(msg){
    document.getElementById('status').innerHTML = msg;
}

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
        document.getElementById('projects-title').style.top = '36px';
        //document.getElementById('projects-title').style.fontSize = '35px';
    }else{
       document.getElementById('projects-title').style.top = '80px';
        //document.getElementById('projects-title').style.fontSize = '40px';
    }
    
    // make sure the title fits inside of the header
    var topheight = 150;
    if($('#projects-title')[0].scrollHeight>89){
        topheight = 36 + $('#projects-title')[0].scrollHeight + 38;
    }
    document.getElementById("content-top").style.height = topheight;
    
    //alert("window width: "+w+"<br>title width: "+document.getElementById('projects-title').style.width +"<br>assigned w: " + (contentw - 30) + "<br>scroll-width: " +$('#projects-title')[0].scrollWidth);
}

function menuscroll(){
    var h = window.innerHeight;
    var scroll = $( window ).scrollTop() + h;
    var menuc =document.getElementById('menu-top-content');
    var menubottom = menuc.offsetHeight;
    //alert($( window ).scrollTop());
    stats("page height: " + h + " scroll bottom: "+ scroll +" menu bottom: " + menubottom);
    if(scroll > menubottom){
        menuc.style.position = 'fixed';
        if(menubottom < h){
            menuc.style.top = 0;
        }else{
            menuc.style.top = h-menubottom;
        }
        
        //stats('fixed');
    }else{
        menuc.style.position = 'absolute';
        menuc.style.top = 0;
        //stats('absolute');
    }
    
}




// DO ALL THIS WHEN THE PAGE LOADS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$( document ).ready( function() {
    
    var resize = true;
    //stats('wowowowo');
    // menu accordion function
    
    $( "#menucontent" ).accordion({
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
        
        // make sure the content is the right size
        projectsize(resize);
        
        // menu scrolling function
        $( window ).scroll(function(){menuscroll();})
    }else{
        $( '#ui-id-1' ).click(function() {
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
    }
    
    // stupid who cares
    //$("#jstest").click(function () {document.getElementById("jstest").innerHTML = "ah no i've been clicked"; });
    
    var isExpanded = false; 
    
    /*
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
    */
        
    
    //un-expand the menu when thing is clicked
    
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
        document.getElementById(menu).style.position = 'absolute';
    });
    
    //resizing the window
    window.onresize = function() { projectsize(true); }
        
  } );

 