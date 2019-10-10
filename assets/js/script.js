$('.nav-link').click(function(event) {

    var to = $(this).attr('href');
    var toELement = $(to);

    $('html, body').animate({
        scrollTop : toELement.offset().top - 100
    }, 2000)

    event.preventDefault();

})

$(window).scroll(function() {
    var cobaScroll = $(this).scrollTop();

    if( cobaScroll > $('.jajal').offset().top - 300 ) {
        $('.coba').each(function (b) {
            setTimeout(function () {
                $('.coba').eq(b).addClass('muncul')
            }, 500 * (b + 1) );
        })
    }

})