// Scores provided 
var scores = [60, 50, 60, 58, 54, 54,
    68, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

// Costs provided
var costs = [.25, .27, .25, .25, .25, .25,
   .33, .31, .25, .29, .27, .22,
   .31, .25, .25, .33, .21, .25,
   .25, .25, .28, .25, .24, .22,
   .20, .25, .30, .25, .24, .25,
   .25, .25, .27, .25, .26, .29]

// Find the high score in scores array
function printAndGetHighScore(param0) {
var highScore = 0;
var output;
for (var i = 0; i < param0.length; i++) {
output = "Bubble solution #" + i + " score: " + param0[i];
console.log(output);
if (param0[i] > highScore) {
highScore = param0[i];
}
}
return highScore;
}

// Find the index of the high scores
function getBestResults(param1, param2) {
var bestSolutions = [];
for (var i = 0; i < param1.length; i++) {
if (param1[i] === param2) {
bestSolutions.push(i);
}
}
return bestSolutions;
}

// Find the cheapest highest score
function getMostCostEffectiveSolution(scores, costs, highScore) {
var cost = 100;
var index;
for (var i = 0; i < scores.length; i++) {
if (scores[i] === highScore) {
if (cost > costs[i]) {
index = i;
cost = costs[i];
}
}
}
return index;
}

var highScore = printAndGetHighScore(scores);
var bestSolutions = getBestResults(scores, highScore);
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);

console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
console.log("Solutions with the highest score: " + bestSolutions);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");