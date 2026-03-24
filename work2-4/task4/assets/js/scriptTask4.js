 const min = 1;
 const max = 100;
 let rndNum = Math.floor(Math.random()*(max - min + 1)) + min;
 let guess = prompt("Enter a number from 1 to 100");

 game();

 function game() {
    let numberOfGuesses = 1;
    do {
        if (guess > max || guess < min) {
            guess = prompt("Вашето число е извън разрешения интервал (от 1 до 100), опитайте отново!");
        }
        numberOfGuesses ++;
    } while (guess < 1 || guess > 100);

    do {
        if(guess < rndNum) {
            guess = prompt("Вашето число е твърде малко, опитайте отново!");
        } else {
            guess = prompt("Вашето число е твърде голямо, опитайте отново!");
        }
        numberOfGuesses++;    
    } while (guess != rndNum);
    document.write("Поздравления, познахте! Чисолто е " + rndNum);
    document.write("<br>Опити: " + numberOfGuesses);
}

function isPrimeTF(number) {
    let prime=false;
    let counter = 0;
    for (let i = 2; i < number; i++) {
        if (number % i != 0) {
            counter++;
        }
    }
    if (counter === (number - 2)) {
        prime = true;
    }
    return prime;
}
document.write(`<br>${rndNum} is a prime number: ${isPrimeTF(rndNum)}`);

function orderLetters(text) {
    
}