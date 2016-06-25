// write a method names()
// which takes a string of
// comma-separated names
// (first and last) and then
// returns an object where each
// firstname is a key, and each
// lastname is a value
//
// i.e. names("George Washington, John Adams, Kanye West")
//   .. --> {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function names(str) {
var people = str.split(', ').map(function(v){
  return v;
});
  var obj={};
//   console.log(people);
   for(i = 0; i < 3; i++){
//   console.log(people[i]);
     var firstLast = people[i].split(' ');
//   console.log(firstLast);
   
  var firstName = firstLast[0];
  var lastName = firstLast[1];
//   console.log(firstName);
//   console.log(lastName);
     
     obj[firstName] = lastName;
//   console.log(obj);
   }               
  return obj;
}

var results = names("George Washington, John Adams, Kanye West");



console.assert(results.George === "Washington");
console.assert(results['John'] === "Adams");
console.assert(results['Kanye'] === "West");
