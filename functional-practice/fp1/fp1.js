//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

function forEach(array, callback){
    for (i=0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a){ total *= a; })
console.assert(total === 24)

// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------
function reduce(array, callback){
  var accumulator;
  
  forEach(array, function(value, i, callbackArray) {
    // If it is our first time through, use the first value
    if(i === 0) {
      accumulator = value;
    }
    // Otherwise, 
    else if (i < array.length) {
      accumulator = callback(accumulator, value);
    }
  });
  return accumulator;
}

// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24
);


// ----------------------------
// using forEach() from above, write your own map()
// that takes an array and a function
// ----------------------------

function map(array, callback){
    var mapArray = [];
    
    forEach(array, function (num, i) {
        mapArray[i]= callback(num);
    });
    return mapArray;  
}

// tests
// ---
var squares = map([1, 2, 3, 4], function(v){ return v*v; });
console.assert(squares[0] === 1);
console.assert(squares[1] === 4);
console.assert(squares[2] === 9);
console.assert(squares[3] === 16);

// ----------------------------
// using reduce() from above, write your own filter()
// that takes an array and a function
// ----------------------------

function filter(array, callback){
    var filterArray = [];
    reduce (array, function (a, b){
    var value = callback(b);
        if (value) {
            filterArray.push(b);
        }
    });
        return filterArray;
}

// tests
// ---
var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0; });
console.assert(evens[0] === 2);
console.assert(evens[1] === 4);

// ----------------------------
// using reduce() from above, write your own sum()
// that adds up all arguments to sum (note: variadic behavior)
// ----------------------------

function sum(){
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    var total = args.reduce(function(a,b){
        return a + b;
    });
    return total;
}
// tests
// ---
console.assert(sum(1, 2, 3) === 6)
console.assert(sum(1, 2, 3, 4) === 10)
console.assert(sum(1, 2, 3, 4, 5) === 15)

// ----------------------------
// using Array.sort(), sort the following array
// of people by name
// ----------------------------

var names = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"}
];

names.sort(function(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    }
    return 0;
});

// tests
// ---
console.assert(names[0].name === "Brian");
console.assert(names[1].name === "Jesse");
console.assert(names[2].name === "Matt");
console.log(names);

// ----------------------------
// Using Array.map(), Array.filter(), and Array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var results = customers
    .filter(function(customer){
        return customer.first.toLowerCase().indexOf('j') === 0;
    })
    .map(function(customer){
            return { fullname: customer.first + ' ' + customer.last};
    })
    .sort(function(a, b){
        if (a.fullname < b.fullname){
            return -1;
        } else if (a.fullname > b.fullname) {
            return 1;
        }
        return 0;
    });

// tests
// ---
console.assert(results[0].fullname === "Jack White");
console.assert(results[2].fullname === "John Smith");
