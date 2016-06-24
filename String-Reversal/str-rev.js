// Write a function that takes a string as input,
// and returns a copy of that string reversed.
//
// remember that:
// - you can get and set characters in a string at
//   specific indices
//
//   i.e. 'abc'[2] // 'c'
//   i.e. 'abc'[3] = 'd' // 'abcd'
// - there is an Array.reverse() method (but not a
//   String.reverse() method)
// - use something other than
//



//-----------------FIRST ATTEMPT-----------------------------------
     "abc".split('').reverse().join('') --> "cba"

function reverse(string){
  
  var revString = string.split('').reverse('').map(function(v){
    return v.split('').toString();
  });
  return revString.join('');
}

console.assert(reverse('hello') === 'olleh');
console.assert(reverse('hello, world') === 'dlrow ,olleh');
//-----------------------------------------------------------------



//-----------------SECOND ATTEMPT----------------------------------

function reverse(string){
  var revStr = '';
  for (var i = string.length - 1; i >= 0; i--)
    revStr += string[i];
  return revStr;
  
}

console.assert(reverse('hello') === 'olleh');
console.assert(reverse('hello, world') === 'dlrow ,olleh');
//-----------------------------------------------------------------

