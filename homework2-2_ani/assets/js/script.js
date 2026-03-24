let age, start, number, startTime, rndNumOver18Early, rndNumElse;
age=prompt("Възраст:");
start=prompt("Старт (рано/късно):").toLowerCase();
rndNumOver18Early=Math.floor(Math.random()*9000) + 1000;
rndNumElse=Math.floor(Math.random()*1000);
if (age>'18') {
    switch (start)
    {
        case "рано":
            number=rndNumOver18Early;
            startTime="9:30";
            console.log(`Вие стартирате в ${startTime} часа. Вашият номер е ${number}.`);
            break;
        case "късно":
            number=rndNumElse;
            startTime="11:00";
            console.log(`Вие стартирате в ${startTime} часа. Вашият номер е ${number}.`);
            break;
        default:
            console.log("Ако не получавате своя номер, моля обърнете се към регистъра.");
            break;
    }
} else if (age <= '18') {
    number=rndNumElse;
    startTime="12:30";
    console.log(`Вие стартирате в ${startTime} часа. Вашият номер е ${number}.`);
} else {
    console.log("Ако не получавате своя номер, моля обърнете се към регистъра.");
}
document.write("Резултатите са в конзолата.");