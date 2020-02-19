function makeCar() {
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertible = [true, false];
  
    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);
  
    var car = {
      make: makes[rand1],
      model: models[rand2],
      year: years[rand3],
      color: colors[rand4],
      passengers: rand5,
      convertible: convertible[rand6],
      mileage: 0,
      started: false,
      start: function() {
        this.started = true;
      },
      stop: function() {
        this.started = false;
      },
      drive: function() {
        if (this.started) {
          alert("Zoom zoom!");
        } else {
          alert("You need to start the engine first");
        }
      }
    };
    return car;
  }
  
  function displayCar(car) {
    if (car.convertible) {
      car.convertible = "convertible";
      car.start();
      car.drive();
      car.stop();
    } else {
      car.convertible = "nonconvertible";
      car.drive();
    }
    console.log("Your new car is a " + car.convertible + " " + car.year + " " + car.make + " " + car.model + " that can hold " + car.passengers + " passengers!");
  }
  
  var carToSell = makeCar();
  displayCar(carToSell);