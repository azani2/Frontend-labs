let person = {
    fName: "John",
    lName: "Doe",
    get fullName() {
        return `${this.fName} ${this.lName}`;
    },
    set changeName(newName = "") {
        this.fName = newName;
    }
}
console.log(person.fullName); // John Doe
//person.fullName = 'ivan'; не  може
person.changeName = "Ivan";
console.log(person.fullName);

let robot = {
    model: 'A55',
    energy: 100,
    get energyLevel() {
        if (typeof(this.energy) === 'number') {
            return `My current energy level is ${this.energy}.`;
        } else {
            return `System malfunction: cannot retrieve energy level`;
        }
    },
    set changeModel(newModel = "") {
        this.model = newModel;
    }
}

console.log(robot.energyLevel);
console.log(robot.model);
robot.changeModel = "G67";
console.log(robot['model']);

// КОНСТРУКТОРИ

function Person(person_name, person_age, person_gender) {
    this.name = person_name;
    this.age = person_age;
    this.gender = person_gender;
    this.greet = function() {
        return (`Hi ${this.name}!`);
    }
}
let ani = new Person('Aneliya', 17, 'female');
let ivana = new Person("Ivana", 20, 'female');
console.log(ani.name);//Aneliya
console.log(ivana['name']);//Ivana
console.log(ivana.greet());//Hi Ivana!
console.log(ani);//obekt

//zadacha 2

function StreetCatIFeed(cat_name, cat_age, cat_apetit) {
    this.name = cat_name;
    this.age = cat_age;
    this.apetit = cat_apetit;
    this.feedCat = function() {
        if ( this.apetit > 1) {
            console.log(`${this.name} изяде ${this.apetit} шепи гранули.`);
        } else {
            console.log(`${this.name} изяде ${this.apetit} шепа гранули.`);
        }
    }
}

let cat_objects = [cat1 = 0, cat2 = 0, cat3 = 0];
let cats = ['Маца', 'Бебо', 'Тигърка'];
let cat_ages = [3, 2, 2];
let cat_appetites = [1, 2, 1];

for (let i = 0; i < cats.length; i++) {
    cat_objects[i] = new StreetCatIFeed(cats[i], cat_ages[i], cat_appetites[i]);
    cat_objects[i].feedCat();
}

//вградени обекти
//Math
console.log(Math.PI);
console.log(Math.floor(Math.random()*100));//закръгля до цялото най-малко
console.log(Math.round(Math.random()*100));//закръгля нормално
console.log(Math.abs(-8));
console.log(Math.sqrt(64));
console.log(Math.pow(8, 2));
//Number("Ani") -> NaN
//String
let text1 =  "Hello world!";
console.log(text1);
let text2 = text1.toUpperCase();
console.log(text2);
let text3 = text1.toLowerCase();
console.log(text3);
let t1 = "Hello";
let t2 = "world!";
let t3 = t1.concat(" ", t2);
console.log(t3);
let sentence = "Hello my name is Ani.";
console.log(sentence.indexOf('name'));//9
console.log(sentence.lastIndexOf('e'));
//Date
let today = new Date();
console.log(today.getDate());//5 (деня от датата)
console.log(today.getDay());//6 (деня от седмицата на датата)
console.log(today.getFullYear());//2020
console.log(today.getYear());//120 (от 100 нагоре)
console.log(today.getHours());//часа (16)
console.log(today.getMinutes());//43
console.log(today.getMonth());//11 (макар, че е декември, защото са от 0 до 11)
console.log(today.getTime());//милисекунди от 1.1.1970, ползва се много често, защото всички други методи на Date са производни на този, но само този не се съобразява с часовата зона
console.log(today.getSeconds());//0-60, секундите сега
function ShowDay() {
    document.getElementById('result').innerHTML =  today.getDate() + " days have passed since the beginning of the month.";
}
function ShowYear() {
    document.getElementById('result').innerHTML = "The year is " + today.getFullYear() + ".";
}

function Teilnehmer(name, city, food, country) {
    this.name = name;
    this.city =  city;
    this.food = food;
    this.country = country;
}
let person1 = new Teilnehmer("Ани", "Варна", "пица", "България");
let person2 = new Teilnehmer("", "", "", "");
function Show(person) {
document.getElementById("name").innerHTML = "Здравей, аз съм " + person.name;
}