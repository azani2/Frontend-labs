function temp(frh = 0, age = 0) {
    let result = "";
    if (age < 3) {
        if (frh < 97.9) {
            result = "Имате хипотермия";
        } else if (frh === 97.9) {
            result = "Имате понижена температура";
        } else if (frh < 100.4) {
            result = "Температурата на тялото ви е в норма";
        } else if (frh === 100.4) {
            result = "Имате завишена температура";
        } else {
            result = "Имате треска";
        }
    } else if (age < 10) {
        if (frh < 95.9) {
            result = "Имате хипотермия";
        } else if (frh === 95.9) {
            result = "Имате понижена температура";
        } else if (frh < 99.5) {
            result = "Температурата на тялото ви е в норма";
        } else if (frh === 99.5) {
            result = "Имате завишена температура";
        } else {
            result = "Имате висока температура";
        }
    } else {
        if (frh < 97.6) {
            result = "Имате хипотермия";
        } else if (frh === 97.6) {
            result = "Имате понижена температура";
        } else if (frh < 99.6) {
            result = "Температурата на тялото ви е в норма";
        } else if (frh === 99.6) {
            result = "Имате завишена температура";
        } else {
            result = "Имате висока температура";
        }
    }
    if (frh > 100.4) {
        result = "Имате треска";
    }
    document.write(result);
}

let temperature = 0, yourAge = 0;
do {
    temperature = Number(prompt("Въведете температура във Фаренхайт (различна от 0):"));
} while (temperature === 0);
do {
    yourAge = Number(prompt("Въведете възраст (число, различно от 0):"));
} while (yourAge === 0);

temp(temperature, yourAge);