$('.carousel.carousel-slider').carousel({full_width: true});

$(document).ready(function(){
      $('.parallax').parallax();
    });
$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

$(function() {
    $('.rating-container .star').click(function() {
        $('.rating-container .star').prop('src', 'images/1.png');
        $(this).prevAll('.star').addBack().prop('src', 'images/2.png');
    });
});