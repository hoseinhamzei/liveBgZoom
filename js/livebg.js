
var x,y;


$(".lbg-container").each(function() {
    
    
    var offset = $(this).offset();
    var width = $(this).width();
    var height = $(this).height();
    
    $(this).css({"background-position": "center center","background-size":`${width+height/2}px`});
    
    $(this).mousemove(function(event){
        
        x = ((event.pageX- offset.left)/width) * 100;
    y = ((event.pageY- offset.top)/height) * 100;
    
    var bgposti = x+"%" + " " + y+"%";
        
        
        /// ENTER CUSTOM ZOOM AMOUNT ///
        var zoomAmount = "50%";
        
        
    var sum = width+height/2;
    sum += sum * (parseFloat(zoomAmount)/100);    
        
    $(this).css({"background-position": bgposti,"background-size":sum+"px"});
        
    });
    
    
    $(this).mouseleave(function(){
    $(this).css({"background-position": "center center","background-size":`${width+height/2}px`});
});
    
    
    
    
});
