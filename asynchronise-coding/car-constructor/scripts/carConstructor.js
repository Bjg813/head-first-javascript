// Dog constructor
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
            if (this.weight > 25) {
            console.log(this.name + ' says Woof!');
        } else {
            console.log(this.name + ' says Yip!');
        }
    };
}


// Car constructor with start, drive, and stop methods
function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
    this.drive = function() {
        if (this.started) {
            console.log(this.make + ' ' + this.model + ' goes zoom zoom!');
        } else {
            console.log('Start the engine first.');
        }
    };
}

// Create cadi parameters using an object literal
var cadiParams = {make: 'GM',
    model: 'Cadillac',
    year: 1955, 
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892
};

// Chevy
var chevyParams = {make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    mileage: 1021
};

// Taxi
var taxiParams = {make: 'Webville Motors',
    model: 'Taxi',
    year: 1955,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 281341
};

// fiat
var fiatParams = {make:'Fiat',
    model: '500',
    color: 'Medium Blue',
    passengers: 2,
    convertible: false,
    mileage: 88000
};


// Create car constructors
var cadi = new Car(cadiParams);
var chevy = new Car(chevyParams);
var taxi = new Car(taxiParams);
var fiat = new Car(fiatParams);

// List cars in an array to be able to iterate through them
var cars = [cadi, chevy, taxi, fiat];

// Iterate through cars to start, drive & stop the cars
for (var i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
}