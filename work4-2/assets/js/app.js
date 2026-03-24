$(document).ready(function() {
    let currentPlayer = 'o';
    let firstPlayer = 0, secondPlayer = 0;
    let firstPlayerScore = $("#firstPlayer");
    let secondPlayerScore = $("#secondPlayer");
    //let number = Math.min(Math.max(parseInt(number), 1), 9); taka moje da se limitira chislo ot 1 do 9 vkl
    let won = false;
    let filled = 0;
    function place(box) {
        let currentBox = $(box);
        if (currentBox.html() != '' || won) return;

        currentBox.html(currentPlayer);
        filled++;
        if (currentPlayer == "o") {
            currentPlayer = 'x';
        } else {
            currentPlayer = "o";
        }
        
        for (let i=0; i < 3; i++) {
            checkWinner($('#0x' + i).html(), $('#1x' + i).html(), $('#2x' + i).html());
            checkWinner($(`#${i}x0`).html(), $(`#${i}x1`).html(), $(`#${i}x2`).html());
        }

        checkWinner($('#0x0').html(), $('#1x1').html(), $('#2x2').html());
        checkWinner($('#2x0').html(), $('#1x1').html(), $('#0x2').html());
    }

    function checkWinner(first, second, third) {
        if (first != "" && first == second && first == third) {
            if (currentPlayer == "o") {
                currentPlayer = 'x';
                secondPlayer += 1;
                secondPlayerScore.html(secondPlayer);
            } else {
                currentPlayer = 'o';
                firstPlayer += 1;
                firstPlayerScore.html(firstPlayer);
            } 
            alert('Winner: ' + currentPlayer);
            won = true;
        } 
        
    }

    let test = [];
    $('.game-box').on('click', function() {
        place(this);

        test.splice(0);//trie vs ot index 0 natatak
        $('.game-box').each(function() {
            test.push($(this).html());
        })

        if (!test.includes('') && won == false) {
            alert('Draw');
        }
    })

    
    $('#play').on('click', function() {
        $('.game-box').html('');
        won = false;
        currentPlayer = 'o';
    });

    $('#reset').on('click', function() {
        firstPlayer = 0;
        secondPlayer = 0;
        won = false;
        
        firstPlayerScore.html(firstPlayer);
        secondPlayerScore.html(secondPlayer);
        $('.game-box').html('');
    });
})