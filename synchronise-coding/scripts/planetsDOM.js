// Access the DOM using the built in method of document.getElementById()
// Bind the DOM element ID to variable of "planet"
// Access the inner html of the element and replace it with a new string
var planet = document.getElementById("greenplanet");

planet.innerHTML = "Red Alert: hit by phaser fire!";

console.log(planet);