$(document).ready(function(){

    $('#button1').on('click', function() {
        $('#p1').css('color', 'blue');
    })

    $('#p1').on({
        mouseenter: function() {
            $(this).css('background', 'blue');
        }, 
        mouseleave: function() {
            $(this).css('background', 'green');
        }, 
        click: function() {
            $(this).css('background', 'yellow');
        }, 
    })

    $('#button2').on('click', function() {
        $('#santa').hide('slow', function() /*callback function*/{
            alert('done');
        });
        $('#santa').show('slow');
        //moje i $('#santa').hide(100); (milisekundi)
        //alert('done'); taka alertat shte izleze predi da se skrie snimkata
    })
    $('#button3').on('click', function() {
        $('#santa').toggle('slow');
    })

    //zad1
    $('#zad1-btn').on('click', function() {
        $('#heading1').show('slow');
        $('.zad1-p').fadeOut('slow');// ili 2000 ms 
        $('#rnd-photo').fadeToggle('slow');
    })

    $('#slideup-btn').on('click', function() {
        $('.slide-p').slideUp();
    });
    $('#slidedw-btn').on('click', function() {
        $('.slide-p').slideDown();
    });
    $('#slidetgl-btn').on('click', function() {
        $('.slide-p').slideToggle();
    });

    $('#reg').on('click', function() {
        $('form').toggle('slow');
        $('.h-text').slideToggle();
    })
    $('#play-smth').on('click', function() {
        $('#him1').fadeIn(2000);
        $('#him1').fadeOut(2000, function() {
            $('#him2').fadeIn(2000);
            $('#him2').fadeOut(2000);
        });
        
    });

    $('#tgl-spd').on('click', function() {
        for (let i=0; i<10; i++) {
        $('#fast-p').toggle(2000);
        $('#mid-p').toggle(4000);
        $('#slow-p').toggle(6000); }
    });

    $('.didi').on('click', function() {
        $(this).hide(2000);
    });
    let counterTo20 = 0;
    $('#beer-btn').on('click', function() {
        $('#beer').animate({
            left: '+=10px'
        });
        $('#beer').css('opacity', '-=5%');
        counterTo20++;
        if(counterTo20===20) {
            $('#beer').fadeOut();
            $('#sorry-txt').show();
        }
    });

    $('#right-btn').on('click', function() {
        $('#red-block').animate({
            left: '+=50px'}, 
            'slow');
    });
    $('#left-btn').on('click', function() {
        $('#red-block').animate({
            left: '-=50px'}, 'slow');
    });

    $('#zad3-btn').on('click', function() {
        $('#red-block2').animate({
            width: '300px',
            height: '300px'
        }, 'slow', function() {
            $('#red-block2').css('background', 'green');
        });
        $('#red-block2').animate({
            width: '100px',
            height: '100px'
        }, 'slow', function () {
            alert('Анимацията е завършена!');
        });
    });

    .html('');

})