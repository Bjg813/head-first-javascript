var cadi = {
  make: "GM",
  model: "Cadillac",
  fuel: 0,
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892,
  started: false,
  start: function() {
    if(this.fuel > 0) {
    this.started = true;
    } else {
      console.log("The car is on empty, fill up before starting!");
    }
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      if (this.fuel > 0) {
        console.log(this.make + " " + this.model + " goes zoom zoom!");
        this.fuel = this.fuel - 1;
        console.log(this.fuel);
      } else {
        console.log("Uh oh, out of fuel");
        this.stop();
      }
    } else {
      console.log("You need to start the engine first.");
    }
  },
  addFuel: function(amount) {
    this.fuel = this.fuel + amount;
  }
};


cadi.addFuel(1);
cadi.start();
cadi.drive();
cadi.drive();
cadi.start();
cadi.addFuel(5);
cadi.start();
cadi.drive();