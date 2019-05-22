// jQuery
$(document).ready(function(){
    $("#show-search-box").click(function(){
        //$('#search-box').animate({"left":"0px"}, 100);
        //$('#search-box').slideDown();
        $('#search-box').fadeToggle(100);
    });
    $("#search-close").click(function(){
        //$('#search-box').animate({"left":"100%"}, 100);
        //$('#search-box').slideUp();
        $('#search-box').fadeToggle(100);
    });

    $("#btn-off-canvas").click(function(){
        $('#off-canvas').animate({"left":"0px"}, 235);
        $('.pr_off-canvas-mask').addClass('off-canvas-mask');
    });

    $(".off-canvas-close").click(function(){
        console.log('closecanvas');
        $('#off-canvas').animate({"left":"-100%"}, 235);
        $('.pr_off-canvas-mask').removeClass('off-canvas-mask');
    });
});
