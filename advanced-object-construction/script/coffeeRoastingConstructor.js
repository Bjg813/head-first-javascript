function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.barista = function() {
        if (this.ounces <= 8) {
            console.log("You've ordered a small " + this.roast + " coffee.");
        } else if (this.ounces > 8 && this.ounces < 16) {
            console.log("You've ordered a medium " + this.roast + " coffee.");
        } else {
            console.log("You've ordered a large " + this.roast + " coffee.");
        }
    };
}

var houseBlend = new Coffee("House Blend" , 12);

var darkRoast = new Coffee("Dark Roast", 16);

var blondeRoast = new Coffee("Blonde Roast", 8);

// Place coffee bojects in an array
var coffeeOrder = [houseBlend, darkRoast, blondeRoast];

// Iterate through the array
for (var i = 0; i < coffeeOrder.length; i++) {
    coffeeOrder[i].barista();
}