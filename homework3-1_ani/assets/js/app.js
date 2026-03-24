$('document').ready(function(){
    
    $('table').on('click', 'td', function(){
        $(this).css('background', 'rgb(255, 66, 66)');
    });

    $('table').on('dblclick', 'td', function(){
        $(this).css('background', ' rgb(72, 228, 98)');
    });

});