// Scripts

$('#stage').animate({opacity: 0}, 1800, function() {
        $(this)
            .css({'background-image': 'url(./img/cloud.png)'})
            .animate({opacity: 1});
    });





$("#car").delay(2850).animate({left: "-50px"}, {duration: 1350, queue: true});

$("h1").animate({opacity: 10}, 20000);




