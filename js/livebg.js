

$(document).ready(function(){
    
    
    
    
    var x,y;
var zoomAmount = "50%";



        
    



$(".lbg-container").each(function() {
    
    
    var offset = $(this).offset();
    var width = $(this).width();
    var height = $(this).height();
    var coverSize;
    
    if($(this).attr("id") !== null && $(this).attr("id") !== "" && typeof $(this).attr("id") !== 'undefined'){
    zoomAmount = $(this).attr("id");
    console.error(zoomAmount);
    }
    else{
        console.error('.lbg-container: no id detected or id is not in correct form id must be a percentage more than 0% like id="50%" setting zoom amount to default value...');
    }
    
    if(width > height || width === height){
        coverSize = width+height/2;
    }else if(height > width){
        coverSize = width/1.5+height;
    }
    
    
    $(this).css({"background-position": "center center","background-size":coverSize+'px'});
    
    $(this).mousemove(function(event){
        
        x = ((event.pageX- offset.left)/width) * 100;
    y = ((event.pageY- offset.top)/height) * 100;
    
    var bgposti = x+"%" + " " + y+"%";
        
        
        
        
        
        
    
        
    var sum = coverSize;
    sum += sum * (parseFloat(zoomAmount)/100);    
        
    $(this).css({"background-position": bgposti,"background-size":sum+"px"});
        
    });
    
    
    $(this).mouseleave(function(){
    $(this).css({"background-position": "center center","background-size":coverSize+'px'});
});
    
    
    
    
});

    
    
    
    
    
    
});
