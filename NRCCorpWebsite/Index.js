$(document).ready(function () { 
    setTimeout(function() {
        $('#NRC-Banner').addClass('hover');
        $('#NRC-Banner').hover(function() {
            $('#NRC-Banner').removeClass('hover');
        })
    }, 500);
    setTimeout(function() {
        $('#NRC-Banner').removeClass('hover');
    }, 5500);
});
