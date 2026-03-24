const myCar = {
    brand: 'BMW',
    model: 'E30',
    engine: '330',
    hp: 184,
    year: 1986, 
    parts: ['doors', 'windows', 'breaks', 'tires'],
    startEngine: function() {
        console.log('engine start');
    },
    stopEngine() {
        console.log('engine stop');
    }
}
console.log(myCar);

const myCard = {
    name: 'Ani',
    age: 17,
    city: 'Varna',
    walk() {
        console.log('I can walk');
    }
}

console.log(myCard.name);//Ani
myCard.walk();//I can walk
console.log(myCard['age']);//17
console.log(myCard['walk']);//f(){}
console.log(myCard["walk"]);//f() {}
myCard['walk']();//I can walk

let dogs = {
    Hunter: 'doberman',
    Goshko: 'beagle',
    Lucky: 'mutt',
    Nana: 'plush toy'
}
let myDog = 'Goshko';
console.log(dogs['Hunter']);
console.log(dogs[myDog]);

dogs.Hunter = 'pudel';
console.log(dogs.Hunter);
dogs.Snoopie = 'beagle';
dogs.John = 'cat';

//TASK 1
const myDog1 = {
    name: 'Rome',
    owner: 'Ani',
    faveFood: 'granules',
    friends: ['Bob', 'Sisi'],
    talk() {
        console.log("My owner is " + this.owner);
    }
}
console.log(myDog1);

myDog1.age = 2;
myDog1['eyeColor'] = 'brown';
console.log(myDog1);

myDog1['talk']();
console.log("I am " + myDog1.age + " years old");
console.log(myDog1.friends[0]);
//Exercises
let car = {
    brand: 'Mercedes',
    model: 'W203',
    hp: 150,
    tires: {//child na glavnia obekt
        brand: "michelin",
        callBrand: function() {
            console.log(this.brand);
        }
    },
    callBrand() {
        console.log(this.brand);
    }
}
car.tires.callBrand();//michelin
car.callBrand();//Mercedes



//TASK 2
let hotel = {
    name: 'Neon',
    roomsNum: 50,
    reservedRooms: 35, 
    CheckAvailability() {
        let freeRooms = this.roomsNum - this.reservedRooms;
        console.log("There are " + freeRooms + " free rooms");
    }
}
hotel.CheckAvailability();
//Exercises


let spaceship = {
    captain: {
        name: "Lily",
        degree: "Computer engineering degree",
        cheerTeam() {
            console.log("Great job Team!");
        }
    },
    medic: {
        name: "Clementine",
        degree: "Medical degree",
        cheerTeam() {
            console.log("All is good!");
        }
    },
    engineer: {
        name: "Keran",
        degree: "Computer engineering degree",
        cheerTeam() {
            console.log("Ship is great!");
        }
    }
}
for(let crewmate in spaceship) {
    console.log(`The ${crewmate} is called ${spaceship[crewmate].name}, has a ${spaceship[crewmate].degree} and says:`);
    spaceship[crewmate].cheerTeam();
}

//TASK 3
let group = {
    student1: {
        name: "Ivan", age: 17, favClass: "да бе"
    },
    student2: {
        name: "Pesho", age: 17, favClass: "нямам"
    },
    student3: {
        name:"Tanya", age: 17, favClass: "не знам"
    }, 
    student4: {
        name:"Pipi", age: 16, favClass: "моля?"
    }, 
    student5: {
        name:"Kiril", age: 17, favClass: "грешка"
    }
}

for(let student in group) {
    console.log(`${student} се казва ${group[student].name} и неговия любим предмет е ${group[student].favClass}`);
}

