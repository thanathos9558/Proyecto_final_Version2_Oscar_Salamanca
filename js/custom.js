$(window).load(function() {

    "use strict";

    /*   Popup-Gallery                                            */

    $('.popup-gallery').find('a.popup1').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-gallery').find('a.popup2').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-gallery').find('a.popup3').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-gallery').find('a.popup4').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: false
        }
    });


    /*   Navigation Background Color                              */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('.navbar-fixed-top').addClass('opaque');
        } else {
            $('.navbar-fixed-top').removeClass('opaque');
        }
    });


});

/*   Page Loader                                              */
$('#loader').fadeOut(100);