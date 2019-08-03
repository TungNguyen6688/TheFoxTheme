$(function () {

    // $('.products').isotope({
    //     // options
    //     itemSelector: '.product',
    //     layoutMode: 'masonry'
    // });

    // init Isotope
    var $products = $('.products').isotope({
        itemSelector: '.product',
        layoutMode: 'masonry'
    });

    // layout Isotope after each image loads
    $products.imagesLoaded().progress(function () {
        $products.isotope('layout');
    });

    $('.category a').click(function(){
        $('.category a').removeClass('active');
        $(this).addClass('active');

        var href = $(this).attr('href');

        $products.isotope({filter: href});
        
        return false;
    });
})