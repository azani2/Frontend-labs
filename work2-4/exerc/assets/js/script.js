//let test = Number(prompt('choose a number', 'a'));
//console.log(test); //NaN
let myArr = ['Ani', 17, 'Varna', true];
console.log(myArr);
//myArr.push('Vodenicharova', 'Varna');
//myArr.pop(); // маха последната стойност
//myArr.unshift('Bulgaria'); // добавя стойност на 0-ва позиция
//myArr.shift(); //маха първата стойност
/*myArr.pop();
myArr.pop();
myArr.push('Silistra');*/
myArr.splice(2, 1/*колко елемента да промени след индекс 2*/, 'Silistra'); // променя елементс от масива
console.log(myArr); 
myArr.splice(2, 1); // изтрива 1 елемент след този с индекс 2
myArr.splice(2, 2); //маха 2 елемента след този с индекс 2

/*for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}*/
myArr.forEach(function(item, index) {
    console.log(index + " : " + item);
});

function myFirstFunctionNot(name, age) {
    console.log("Hello, there!");
    console.log('My name is ' + name + ".");
    console.log("My age is " + age + ".");
} //създава функцията
myFirstFunctionNot("Ani", 17); //извиква функцията
myFirstFunctionNot("Ivan", 18);

function mathFunc(num1 = 0, num2 = 0) {
    let sum = num1 + num2;
    return sum;
}
console.log(mathFunc(10, 25));
console.log(mathFunc(25));
function myfunction(name) {
    console.log(name); //1ви начин за деклариране на функция
} // така функцията може да е декларирана след употребата й
let myFunc = function (name) {
    console.log(name); //2ри начин
} // така функцията трябва първо да се декларира и на по-долен ред да се използва
let color = 'red';
function myCar() {
    let car = 'ford';
    color = 'green';
    console.log(car);
    console.log(color);
}
console.log(color); // red
console.log(myCar()); // ford + green
