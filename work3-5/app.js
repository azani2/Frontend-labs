$(document).ready(function() {

    $('.tooltip').tooltip({
        //content : 'Text of js',
        //disabled : false,
        //position : 'at',
        tooltipClass : 'pink',
        track: true, /*sledva mishkata*/
        hide : {
            effect : 'explode',
            duration : 1000
        },
        open : function() {
            console.log("Tooltip open");
        },
        close : function() {
            console.log("Tooltip closed")
            let inputVal = $('#tooltip-1').val();
            //alert(`You entered ${inputVal}`);
        }
    });

    let bar = $("#progressbar");
    let label = $('.progress-label');
    bar.progressbar({
        value : 0,
        max : 500,
        complete : function() {
            console.log('done');
            $('.hide').show('slow');
            label.text('Loading Completed!');
        }
    });
    function progress() {
        let val = bar.progressbar('value') || 0;
        bar.progressbar('value', val + 1);

        if(val < 499) {
             setTimeout(progress, 10); 
        }
    }
    setTimeout(progress, 100);

});