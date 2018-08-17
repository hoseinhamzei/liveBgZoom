
var x,y;
$(".lbg-container").mousemove(function(event) {
    var offset = $(this).offset();
    var width = $(this).width();
    var height = $(this).height();
    
    x = ((event.pageX- offset.left)/width) * 100;
    y = ((event.pageY- offset.top)/height) * 100;
    
    var bgposti = x+"%" + " " + y+"%";
    
    $(this).css({"background-position": bgposti,"background-size":"150%"});
    
});

$(".lbg-container").mouseleave(function(){
    $(this).css({"background-position": "50% 50%","background-size":"100%"});
});