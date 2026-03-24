/*let test = $('p');
console.log(test);
$('p').hide();
$('#test').hide();
$('.hide').hide();*/
$('document').ready(function(){
    //$('p').hide();
    $('.exerc').text('JavaScript text');
    console.log($('div').text());
    console.log($('div').html());

    $('.ex-div').html('<p>some text</p><p>some text</p>');
    $('.ex-div').html('<b>JavaScript text</b>');

    $('.exerc').css('background', 'red');

    console.log($('.exerc').css('background'));
    console.log($('.exerc').css('background-color'));

    $('.exerc').css({
        'color' : 'white',
        'background' : 'red',
        'padding' : '5px'
    });

    //zad 1

    $('h1').css({
        'text-align' : 'center',
        'background' : 'gray',
        'padding' : '15px'
    });
    //$('p').text('JavaScript is awesome');
    $('.change-color').css('color', 'orange');
    $('#background-style').css('background', 'cyan');

    //ex.

    $('button').dblclick/*ili prosto click*/(function() {
        $('p').css('background', 'yellow');
    });

    $('p').mouseover(function() {
        $(this/*samo posocheniq p*/).css('color' , 'navy');
    });
    $('p').mouseleave(function(){
        $(this/*samo posocheniq p*/).css('color' , 'gray');
    });

    $('p')./*mousedown*/mouseup(function() {
        $(this).text('change text');
    });

    $('button').click(function() {
        let value = $('#input-test').val();
        console.log(value);

        console.log($('#try-value').val());//shte varne "", zashtoto paragrafite ne sadarzhat stoinost (a tekst)
        $('#welcome-value').text(`Welcome back, ${value}`);
    });

    //zad 2

    let accounts = [
        {
            'fname' : 'Tom',
            'lname' : 'Johnson' 
        },
        {
            'fname' : 'Picky',
            'lname' : 'Ed' 
        },
        {
            'fname' : 'Mona',
            'lname' : 'Lisa' 
        }
    ];

    $('.submit').click(function(e) {
        e.preventDefault();

        let firstName = $('#fname').val();
        let lastName = $('#lname').val();

        for (let account in accounts) {
            if(account['fname'] == firstName && account['lname'] == lastName) {
                $('#wb-mssg').text(`Welcome back, ${firstName} ${lastName}`);
                $('#wb-mssg').css('color', 'green');
                return;
            }
        }
        $('#wb-mssg').html(`<h3 id="wb-mssg">The name ${firstName} ${lastName} is not registered in the system, <b>please leave<b></h3>`);
        $('#wb-mssg').css('color', 'red');
    });

    //ex

    $('p').on('click', function() {
        $(this).css('background', 'red');
        $(this).css('color', 'yellow');
    });

    $('ul').on('click', 'li', function() {
        $(this).css('background', 'red');
        $(this).css('color', 'yellow');
    });

    $('div').on('click', 'p', function() {
        $(this).css('background', 'yellow');
        $(this).css('color', 'navy');
    });

    $('.idek').on({
        mouseenter: function() {
            $(this).css('background', 'cyan');
        },
        mouseleave: function() {
            $(this).css('background', 'blue');
        }
    });







});


