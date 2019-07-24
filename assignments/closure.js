// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function utah(){
  let team = 'Utah Jazz';
  let college = "University of Utah";
  console.log(`The best team in the NBA is ${team} and the best college football team is the ${college}`);

    function SLC(){
        let mayor = "Jackie Biskupski";
        let basketballPlayer = "Donovan Mitchell"

        function neighborhood(){
          let friend = "Jack";
          let neighbor = "Carl";
          let school = "East High";
        }//neighborhood ends here
        return neighborhood;
    }//SLC ends here
    return SLC;
}//utah ends here
console.log(utah());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
let count =0;
return ()=>{
  count = count + 1;
  return count; 
  }
};
const newCounter =counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
