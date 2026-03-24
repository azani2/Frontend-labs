let vendingMachine = {
    drinks: {
        Cola : {
            name: "Coca-Cola",
            available : 20
        },
        Fanta: {
            name: "Fanta", 
            available : 20
        },
        Pepsi: {
            name: "pepsi",
            available: 20
        }, 
        buyDrinks(drink  = "", amount  = 0) {
            if (this[drink] === undefined) {
                document.getElementById('result').innerHTML = "Моля, въведете вярно име на продукт!";
            } else if (amount > this[drink].available) {
                if (this[drink].available === 0) {
                    document.getElementById('result').innerHTML = "Продуктът не е наличен,  машината ще бъде заредена в най-кратък срок";
                } else {
                    document.getElementById('result').innerHTML = "Не е налично толкова голямо количество от продукта. Наличност: " + this[drink].available;
                }
            } else {
                let newAmount = this[drink].available - amount;
                document.getElementById('result').innerHTML = `Нова наличност: ${newAmount}`;
                this[drink].available = newAmount;
                this.addDrinks(drink);
            }
        },
        addDrinks(drink = "") {
            if (this[drink].available == 0) {
                document.getElementById("result").innerHTML += "<br>Машината беше напълно презаредена.";
            }
        }
    },
    snacks: {
        Chips : {
            name: "chips",
            available : 15
        },
        Candy: {
            name: "candy", 
            available : 15
        },
        Deserts: {
            name: "deserts",
            available: 15
        }, 
        buySnacks(snack  = "", amount  = 0) {
            if (this[snack] === undefined) {
                document.getElementById('result').innerHTML = "Моля, въведете вярно име на продукт!";
            } else if (amount > this[snack].available) {
                if (this[snack].available === 0) {
                    document.getElementById('result').innerHTML = "Продуктът не е наличен,  машината ще бъде заредена в най-кратък срок";
                } else {
                    document.getElementById('result').innerHTML = "Не е налично толкова голямо количество от продукта. Наличност: " + this[snack].available;
                }
            } else {
                let newAmount = this[snack].available - amount;
                document.getElementById('result').innerHTML = `Нова наличност: ${newAmount}`;
                this[snack].available = newAmount;
                this.addSnaks(snack);
            }
        },
        addSnaks(snack = "") {
            if (this[snack].available == 0) {
                document.getElementById("result").innerHTML += "<br>Машината беше напълно презаредена.";
            }
        }
    }
}