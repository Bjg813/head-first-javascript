// Remember that JavaScript functions are always evaluated in the same scoping environment in which they were defined
// Within a function, if you want to dtermine where a variable is coming from, search in its enclosing functions, from the most nested to the least

// A closure results when we combine a function that has free variables with an environment that provides variable bindings for all free variables

function makeCounter () {
    var count = 0;

    function counter() {
        // count is a free variable because it is not defined inside of the "counter" function but in the "makeCounter" function
        count = count + 1;
        return count;
    }
    // This "counter" is the closure
    return counter;
}
var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());  


// Closure
function makePassword (password) {
    return function guess (passwordGuess) {
      return (passwordGuess === password);
    };
  }

  var tryGuess = makePassword("secret");
  console.log("Guessing `nope`: " + tryGuess("nope"));
  console.log("Guessing `secret`: " + tryGuess("secret"));

  
  // Closure
  function multN(n) {
      return function multBy(m) {
          return n * m;
      };
  }
  var multBy3 = multN(3);
  console.log("Multiplying 2: " + multBy3(2));
  console.log("Multiplying 3: " + multBy3(3));


  // Closure using an object instead a of function declaration or function expression
  function makeCounterObject() {
      var count = 0;
      return {
          increment: function() {
              count++;
              return count;
          }
      };
  }
  var counter = makeCounterObject();
  console.log(counter.increment());
  console.log(counter.increment());
  console.log(counter.increment());