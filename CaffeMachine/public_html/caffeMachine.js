let caffeMachine = {
  water: 400,
  coffee: 200,
  milk: 100,
  credit: 100,
  messageElement: document.getElementById("message"),
  coffeeElement: document.getElementById("coffee-status"),
  milkElement: document.getElementById("milk-status"),
  creditElement: document.getElementById("credit"),

  waterStatus: function () {
    document.getElementById("water-status").innerText = this.water;
  },
  addWater: function () {
    const amount = this.getAmountFromUser();
    if (amount) {
      this.water += amount;
      if (this.water > 400) {
        this.water = 400;
        alert("Water is full");
      }
    }

    this.waterStatus();
  },
  emptyWater: function (water) {
    if (this.water < water) {
      this.writeMessage("Machine is out of water \n");
    } else {
      this.water -= water;
      this.writeMessage("Pouring water");
      this.waterStatus();
    }
  },

  coffeeStatus: function () {
    this.coffeeElement.innerText = this.coffee;
  },
  addCoffee: function () {
    const amount = this.getAmountFromUser();

    if (amount) {
      this.coffee += amount;
      if (this.coffee > 200) {
        this.coffee = 200;
        alert("Coffee is full");
      }
    }

    this.coffeeStatus();
  },
  emptyCoffee: function (coffee) {
    if (this.coffee < coffee) {
      this.writeMessage("Machine is out of coffee\n");
    } else {
      this.coffee -= coffee;
      this.writeMessage("Pouring coffee");
      this.coffeeStatus();
    }
  },
  milkStatus: function () {
    this.milkElement.innerText = this.milk;
  },
  addMilk: function () {
    const amount = this.getAmountFromUser();

    if (amount) {
      this.milk += amount;
      if (this.milk > 100) {
        this.milk = 100;
        alert("Milk is full");
      }
    }

    this.milkStatus();
  },
  emptyMilk: function (milk) {
    if (this.milk < milk) {
      this.writeMessage("Machine is out of milk\n");
    } else {
      this.milk -= milk;
      this.writeMessage("Pouring milk");
      this.milkStatus();
    }
  },
  creditStatus: function () {
    this.creditElement.innerText = this.credit;
  },
  addCredit: function () {
    const amount = this.getAmountFromUser();
    if (amount) {
      this.credit += amount;
    }

    this.creditStatus();
  },
  emptyCredit: function (credit) {
    if (this.credit < credit) {
      alert("No enough credit");
      return;
    }
    this.credit -= credit;
    this.creditStatus();
  },
  makeShortEspresso: function () {
    const shortECost = {
      credit: 30,
      water: 20,
      coffee: 10,
    };

    if (this.credit < shortECost.credit) {
      return this.emptyCredit(shortECost.credit);
    }

    if (this.water < shortECost.water) {
      return this.emptyWater(shortECost.water);
    }

    if (this.coffee < shortECost.coffee) {
      return this.emptyCoffee(shortECost.coffee);
    }

    this.writeMessage("Preparing short espresso");
    this.emptyCredit(shortECost.credit);
    setTimeout(this.emptyWater.bind(this), 1000, shortECost.water);
    setTimeout(this.emptyCoffee.bind(this), 2000, shortECost.coffee);
    setTimeout(this.writeMessage.bind(this), 3000, "Short espresso finished.");
  },
  makeLongEspresso: function () {
    const longECost = {
      credit: 40,
      water: 40,
      coffee: 10,
    };

    if (this.credit < longECost.credit) {
      return this.emptyCredit(longECost.credit);
    }

    if (this.water < longECost.water) {
      return this.emptyWater(longECost.water);
    }

    if (this.coffee < longECost.coffee) {
      return this.emptyCoffee(longECost.coffee);
    }

    this.writeMessage("Preparing long espresso");
    this.emptyCredit(longECost.credit);
    setTimeout(this.emptyWater.bind(this), 1000, longECost.water);
    setTimeout(this.emptyCoffee.bind(this), 2000, longECost.coffee);
    setTimeout(this.writeMessage.bind(this), 3000, "Long espresso finished.");
  },
  makeCapuchino: function () {
    const capuchinoCost = {
      credit: 50,
      water: 20,
      coffee: 10,
      milk: 10,
    };

    if (this.credit < capuchinoCost.credit) {
      return this.emptyCredit(capuchinoCost.credit);
    }

    if (this.water < capuchinoCost.water) {
      return this.emptyWater(capuchinoCost.water);
    }

    if (this.coffee < capuchinoCost.coffee) {
      return this.emptyCoffee(capuchinoCost.coffee);
    }

    this.writeMessage("Preparing capuchino");
    this.emptyCredit(capuchinoCost.credit);
    setTimeout(this.emptyWater.bind(this), 1000, capuchinoCost.water);
    setTimeout(this.emptyCoffee.bind(this), 2000, capuchinoCost.coffee);
    setTimeout(this.emptyMilk.bind(this), 3000, capuchinoCost.milk);
    setTimeout(this.writeMessage.bind(this), 4000, "Capuchino finished.");
  },

  // helper functions

  writeMessage: function (message) {
    this.messageElement.innerText = message;
  },
  getAmountFromUser: function () {
    let amount = prompt("Amount?"); //
    amount = parseInt(amount);

    if (!this.amountIsValid(amount)) {
      alert("You entered invalid amount.");
    } else {
      return amount;
    }
  },
  amountIsValid(amount) {
    return Number(amount) > 0;
  },
};

caffeMachine.waterStatus();
caffeMachine.coffeeStatus();
caffeMachine.milkStatus();
caffeMachine.creditStatus();
