
/**
Given a non-negative integer, return an array or 
list of the individual digits in order.

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]
**/

function digitize(n) {
 var digit = n.toString().split('').sort().map(function(v){
   return parseInt(v);
 });
  return digit;

}

console.assert(digitize(123)[1] === 1);
console.assert(digitize(8675309)[6] === 9);
