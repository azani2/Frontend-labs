function myName(name) {
    console.log("Благодаря за поръчката, " + name + "!");
}
myName("Ivan");
myName("Ivana");
let name = "Boriana";
myName(name);

//НОВА ЗАДАЧА
function newPerson(name, addres) {
    document.write("Благодаря за поръчката, " + name + "! ");
    document.write("<br>Ще бъде доставена на адрес " + addres + ".<br>");
}
let myNameNewTask = "Ани";
let myAdress = "гр.Варна, кв.Левски";
newPerson(myNameNewTask, myAdress);
myNameNewTask = "Дядо Коледа";
myAdress = "Северния полюс";
newPerson(myNameNewTask, myAdress);