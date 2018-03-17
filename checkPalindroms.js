//I didn't even know what a palindrom was before
function palindrome(str) {
    var Str = str.split('').join('').replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var reverseStr = str.split('').reverse().join('').replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    console.log(Str)
    if (reverseStr === Str) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  palindrome("0_0 (: /-\ :) 0-0");

//freecodecamps solution
/*function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}*/

// good code unlike mine
/*function palindrome(str) {
  //assign a front and a back pointer
  let front = 0;
  let back = str.length - 1;

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    while ( str[front].match(/[\W_]/) ) {
      front++;
      continue;
    }
    //decrements back pointer if current character doesn't meet criteria
    while ( str[back].match(/[\W_]/) ) {
      back--;
      continue;
    }
    //finally does the comparison on the current character
    if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
    front++;
    back--;
  }
  
  //if the whole string has been compared without returning false, it's a palindrome!
  return true;

}