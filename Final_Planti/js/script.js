// Product-carousel

$('#carouselControl').click(function () {

    if ($('#carouselControl').hasClass('paused')) {
        $('#myCarousel').carousel('cycle');
        $('#carouselControl').text('Pause');
    } else {
        $('#myCarousel').carousel('pause');
        $('#carouselControl').text('Play');
    }

    $('#carouselControl').toggleClass('paused');
});