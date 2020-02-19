var products = [ 
    { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 }
];

// This function comapres the "sold" key value pairs
function compareSold (colaA, colaB) {
    return colaA.sold - colaB.sold;
}

// Compares names
function compareNames (colaA, colaB) {
    if (colaA.name > colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return -1;
    }
}

// Compares calories
function compareCalories (colaA, colaB) {
    if (colaA.calories > colaB.calories) {
        return 1;
    } else if (colaA.calories === colaB.calories) {
        return 0;
    } else {
        return -1;
    }
}

// Compares colors
function compareColors (colaA, colaB) {
    if (colaA.color > colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1;
    }
}

// This funcion just allows us to print to the console
function printProducts (products) {
    for (var i = 0; i < products.length; i++) {
        console.log(
                    "Name: " + products[i].name +
                    ", Calories: " + products[i].calories +
                    ", Color: " + products[i].color +
                    ", Sold: " + products[i].sold);
    }
}

// Using the sort method we sort the "sold" objects in ascending order from smallest to largest 
products.sort(compareSold);
// Print products from our pringProducts() function
printProducts(products);  

// // Sort by name
products.sort(compareNames);
printProducts(products);

// Sort by calories
products.sort(compareCalories);
printProducts(products);

// Sort by color
products.sort(compareColors);
printProducts(products);