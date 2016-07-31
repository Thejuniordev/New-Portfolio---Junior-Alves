//Estilizando as classes navbar
$(window).scroll(function() {
if ($(this).scrollTop() > 280){  
    $('nav').addClass("navbar-default");
  }
  else{
    $('nav').removeClass("navbar-default");
  }
});

$(document).ready(function () {
    $("html").niceScroll();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});