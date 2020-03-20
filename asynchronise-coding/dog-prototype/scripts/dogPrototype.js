function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = 'Canine';

Dog.prototype.bark = function() {
    if (this.weight > 25) {
        console.log(this.name + ' says Woof!');
    } else {
        console.log(this.name + ' says Yip!')
    }
};

Dog.prototype.run = function() {
    console.log('Run!');
};

Dog.prototype.wag = function() {
    console.log('Wag!');
};

Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + ' is already sitting');
    } else {
        this.sitting = true;
        console.log(this.name + ' is now sitting');
    }
};

const fido = new Dog('Fido', 'Mixed', 38);
const fluffy = new Dog('Fluffy', 'Poodle', 30);
const spot = new Dog('Spot', 'Chihuahua', 10);
// Spot wants a bigger bark so we give spot his own custom method instead of inheriting the bark prototype from the Dog constructor
// The javascript engine will always look in the object instance for a property before it looks into the prototype, so if you want a custom property all you have to do is place it in the object and it will run that property before and it wont look in the prototype for it
spot.bark = function() {
    console.log(this.name + ' says WOOF!');
}

fido.bark();
fido.run();
fido.wag();
fido.sit();
fido.sit();
fido.hasOwnProperty('species');

fluffy.bark();
fluffy.run();
fluffy.wag();
fluffy.sit();

spot.bark();
spot.run();
spot.wag();
spot.sit();