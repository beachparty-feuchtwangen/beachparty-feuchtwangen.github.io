'use strict';

function image() {
    let img = $(".background");
    $(img).removeClass("imgcor");
    let imgHeight = $(img).height();
    let windowHeight = $(window).height();
    if(imgHeight < windowHeight) {
        $(img).addClass("imgcor");
    }
}

$(document).ready(function(){
    image();
    
    $(window).resize(function(){
        image();
    });
});