let passReal, passEntered, result;
passReal = "SuperCatPower";
result = "Успешен вход";

while (passEntered !== passReal) {
    passEntered = prompt("Password");
}

console.log(result);

//ВТОРИ НАЧИН

/*
do {
    passEntered = prompt("Password");
} while (passEntered !== passReal)

console.log(passEntered);
*/

// ПРИМЕРНИТЕ ЗАДАЧИ

/*

let x = 0;

while (x <= 5) {
    console.log(`1 ` + x );
    x++;
}

let y=0;

do {
    console.log(y);
    y++;
} while (y <= 5)
*/