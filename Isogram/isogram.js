/**
An isogram is a word that has no repeating letters, consecutive or 
non-consecutive. Implement a function that determines whether a 
string that contains only letters is an isogram. Assume the empty 
string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
**/

function isIsogram(str){
    var strArray = str.toLowerCase();
    var seen=[];
    
    for (var i = 0; i < strArray.length; i++) {
      if(seen.indexOf(strArray[i]) < 0){
        console.log(strArray[i]);
        seen.push(strArray[i]);
       } else {
//          console.log('not an iso');
        return false;
       }
     }
   return true;
}

console.assert( isIsogram("Dermatoglyphics"));
console.assert( isIsogram("isogram"));
console.assert( isIsogram("aba") === false );
console.assert( isIsogram("moOse") === false );
console.assert( isIsogram("isIsogram") === false );
console.assert( isIsogram("") );
