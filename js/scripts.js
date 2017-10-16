// Scripts

$('#stage')
    .animate({opacity: 0}, 800, function() {
        $(this)
            .css({'background-image': 'url(../img/sky.png)'})
            .animate({opacity: 1});
    });

;


$("#car").delay(900).animate({left: "-50px"}, {duration: 750, queue: true});





