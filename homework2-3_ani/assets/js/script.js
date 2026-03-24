let guess, rndNum, guesses = 1;
guess = prompt("Моля, въведете случайно число от 1 до 10!");
rndNum = Math.floor(Math.random()*10);
do {
    if (guess > rndNum) {
        guess = prompt("Вашето число е твърде голямо, опитайте отново!");
    } else {
        guess = prompt("Вашето число е твърде малко, опитайте отново!");
    }
    guesses++;
 } while (guess != rndNum);
document.write("Поздравления, познахте числото.<br>");
document.write(`Число: ${rndNum}<br>`);
document.write(`Опити: ${guesses}`);