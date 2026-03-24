function Teilnehmer(name, city, food, country) {
    this.name = name;
    this.city =  city;
    this.food = food;
    this.country = country;
}

let person1 = new Teilnehmer("Дани", "Варна", "пица", "България");
let person2 = new Teilnehmer("Пешо", "София", "сладолед", "България");

function Show(person) {
    document.getElementById("result").innerHTML = "Здравей, аз съм " + person.name;
    document.getElementById("result").innerHTML += "<br>Аз съм от " + person.country;
    document.getElementById("result").innerHTML += "<br>Моята любима храна е " + person.food;
    document.getElementById("result").innerHTML += "<br>В момента живея в " + person.city;
}