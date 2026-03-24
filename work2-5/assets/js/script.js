/*let myArr = ['ani', 17, true, ['varna', 'sofia']];
let myObj = {
    'name' : 'Ani',
    'gender' : {
        'female' : 'жена',
        'male' : 'мъж'
    }
}*/
//window.alert('Hello');
//document.write('Hello');
//document и window са обекти 
//document.getElementById('header');
// конзолата връща <h1 id="header">...</h1>
//document.getElementsByClassName('p1');
//HTMLCollection(2) [p.p1, p.p1]
//console.log(document.getElementsByName('par'));

//document.getElementsById('header').style.color = red;
//console.log(document.getElementsByClassName('p1'));
//console.log(document.getElementById('lastPar'));
//let number = 25;
/*document.getElementById('first').innerHTML = "Това е ново съдържание.";
document.getElementById('first').innerHTML += number;
document.getElementById('third').style.color = 'blue';
document.getElementById('fourth').style.fontFamily = 'Roboto';*/
//TASK1
console.log(document.getElementsByClassName('p1')[0]);//getEmelentsbyClassNAme връща масив, а ние селектираме нулевия елемент на масива
//TASK2
document.getElementsByClassName('p2')[0].innerHTML = "Това е ново съдържание";
document.getElementsByClassName('p2')[2].style.color = 'blue';
document.getElementsByClassName('p2')[3].
style.fontFamily = 'Verdana';
//TASK3
//exercises
function myFunction() {
    alert('boom!');
    let login = prompt("Your Name:");
    document.getElementById("nameWriter").innerHTML = "Your name is " + login;
}
function ChangeColor() {
    document.getElementById("lastPar").style.color = "orange";
}
//TASK4
function register() {
    let regName = prompt("Enter your name:");
    switch (regName) {

        case "Ani" : case "Ivan" : case "Penka": 
        document.getElementById('regMessage').innerHTML = "Добре дошли, " + regName; 
        break; 

        default :
        document.getElementById('regMessage').innerHTML = "Нямате регистрация";
    }

}

//TASK5
function CalcDollars() {
    let lv = Number(document.getElementById('lvInput').value);
    let sum;
    if (isNaN(lv)) {
        alert("Въведете валидни числа!");
    } else {
        sum = lv * 0.61; 
        document.getElementById('suma').innerHTML = "Сумата в долари е $ " + sum;
    }
}

function CalcLeva() {
    let dlr = Number(document.getElementById('dollarResult').value);

    if (isNaN(dlr)) {
        alert("Въведете валидни числа!");
    } else {
        let sum = dlr / 0.61;
        document.getElementById('suma').innerHTML = "Сумата в левове е " + sum + " лв.";
    }
}

function Clear() {
    document.getElementById('lvInput').value = "";
    document.getElementById('dollarResult').value = "";
}