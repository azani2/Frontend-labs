function Add() {
    let n1 = Number(document.getElementById('number1').value);
    let n2 = Number(document.getElementById('number2').value);
    if (isNaN(n1) || isNaN(n2)) {
        alert("Въведете числo!");
    } else {
        let sum = n1 + n2;
        document.getElementById('result').innerHTML = "Сумата е " + sum + " .";
    }
}

function Sub() {
    let n1 = Number(document.getElementById('number1').value);
    let n2 = Number(document.getElementById('number2').value);
    if (isNaN(n1) || isNaN(n2)) {
        alert("Въведете числo!");
    } else {
        let diff = n1 - n2;
        document.getElementById('result').innerHTML = "Разликата е " + diff + " .";
    }
}

function Multipl() {
    let n1 = Number(document.getElementById('number1').value);
    let n2 = Number(document.getElementById('number2').value);
    if (isNaN(n1) || isNaN(n2)) {
        alert("Въведете числo!");
    } else {
        let prod = n1 * n2;
        document.getElementById('result').innerHTML = "Продуктът е " + prod + " .";
    }
}

function Dev() {
    let n1 = Number(document.getElementById('number1').value);
    let n2 = Number(document.getElementById('number2').value);
    if (isNaN(n1) || isNaN(n2)) {
        alert("Въведете числo!");
    } else if (n2 === 0) {
        alert("На 0 не се дели!");
    } else {
        let quot = n1 / n2;
        document.getElementById('result').innerHTML = "Частното е " + quot + " .";
    }
}