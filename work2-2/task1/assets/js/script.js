for (let index = 0; index <= 30; index++) {
    if (index%2===0) {
        console.log(`${index} е четно число`);
    } else {console.log(`${index} е нечетно число`);}
}
for (let index = 0; index <= 30; index++) {
    if (index%2 === 0) {
        console.log(`${index} е четно число`);
    } else {console.log(`${index} е нечетно число`);}
}

for (let index = 0; index < 31; index++) {
    if (index % 7 == 0 && index > 20) {
        console.log(index);
        break;
    }
    
}

let number = 20;
let found = false;

while (found === false) {
    if (number > 20 && number%7===0) {
        found = true;
        console.log(`${number}`);
    } else {
        number++;
    }
}

console.log(`НОВИ ЗАДАЧИ`);

for (let index = 50; index <= 100; index++) {
        console.log(`${index}`);
}

let i=0;

for (i; i < 100; i++) {
    if (i % 4 == 0 && i > 60) {
        console.log(i);
        break;
    }
    
}