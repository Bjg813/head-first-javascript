// My Fitness Pal constructor
function MyFitnessPal(params) {
    this.goal = params.goal;
    this.food = params.food;
    this.exercise = params.exercise;
    this.remaining = function() {
      console.log(this.goal - this.food + this.exercise);
    };
  }
  
  // Tuesday parameter object
  const tuesParams = {
    goal: 1550,
    food: 1432,
    exercise: 592
    };
  
  // Create new constructors as instance of MyFitnessPal constructor
  const tuesday = new MyFitnessPal(tuesParams);
  
  // List Days
  const days = [tuesday];
  
  // Iterate through the days
  for (let i = 0; i < days.length; i++) {
    days[i].remaining();
  }