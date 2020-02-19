var passengers = [
    { name: "Jane Doloop", paid: true, ticket: "premium" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "coach" } 
];

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function printPassenger(passenger) {
    var message = passenger.name;
    if (passenger.paid) {
        message = message + " has paid";
    } else {
        message = message + " has not paid";
    }
    console.log(message);
    return false;
}

processPassengers(passengers, printPassenger);


// Sterwartist sequence
function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    // Serve first round of drinks
    getDrinkOrderFunction();
    // Serve dinner
    getDinnerOrderFunction();
    // Serve second round of drinks
    getDrinkOrderFunction();
    // Serve third round of drinks
    getDrinkOrderFunction();
    // Show movie
    // Serve fourth round of drinks
    getDrinkOrderFunction();
    // Pick up trash
}

// Create a drink order for different passenger levels
function createDrinkOrder(passenger) {
    var orderFunction;
    var passengerTicket = passenger.ticket;
    if (passengerTicket === "firstclass") {
        orderFunction = function() {
            alert("Would you like a cocktail or wine?");
        };
    } else if (passengerTicket === "coach") {
        orderFunction = function() {
            alert("Your choice is cola or water");
        };
     } else { 
         orderFunction = function() {
                alert("Your choice is wine in addition you can choose between cola or water");
            };
        }
    return orderFunction;
}

// Create a dinner order for different passenger levels
function createDinnerOrder(passenger) {
    var orderFunction;
    var passengerTicket = passenger.ticket;
    if (passengerTicket === "firstclass") {
        orderFunction = function() {
            alert("Would you like chicken or pasta?");
        };
    } else if (passengerTicket === "coach") {
        orderFunction = function() {
            alert("Your choice is peanuts or pretzels");
        };
    } else {
        orderFunction = function() {
            alert("Would you like a snack box or a cheese plate to go with your beverages?");
        };
    }
    return orderFunction;
}

// Funciton that acutally serves the passengers
function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}


servePassengers(passengers);