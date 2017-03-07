$(document).ready(function () { 

    //Will probably drop this on final deployment but it's flashy

    var rotate = function(o1, o2) {
        o1.addClass('slide');
        o2.show();
        o2.removeClass('rotate');
        setTimeout(function() {
            o1.removeClass('slide');
            o1.hide();
            o1.addClass('rotate');
            o1.show();
        }, 500);
    };
    
    setTimeout(function() {
        rotate($('#management'), $('#energy'));
        setTimeout(function() {
            rotate($('#energy'), $('#management'));
        }, 1000);
    }, 1000);

    setTimeout(function() {
        rotate($('#economic'), $('#infrastructure'));
        setTimeout(function() {
            rotate($('#infrastructure'), $('#economic'));
        }, 1000);
    }, 3000);

    setTimeout(function() {
        rotate($('#derilect'), $('#witness'));
        setTimeout(function() {
            rotate($('#witness'), $('#derilect'));
        }, 1000);
    }, 5000);

    //Auto-Play Banner Animation
    setTimeout(function() {
        $('#NRC-Banner').addClass('hover');
        $('#NRC-Banner').hover(function() {
            $('#NRC-Banner').removeClass('hover');
        })
    }, 500);

    //Reverse Banner Animation Auto-Play
    setTimeout(function() {
        $('#NRC-Banner').removeClass('hover');
    }, 5500);

    
});
