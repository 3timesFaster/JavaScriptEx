
// this is from freecodecamps algorithim challenge and as is turns out i stink at problem solving
function reverseString(str) {
    var array = str.split(' ');
    var array1 = array.reverse();
    
    var array3 = [];
    
    var array2 = array1.forEach(function(str) {
      var emptyStr = '';
      for(i = 0; i <= str.length; i++) {
        var position = str.length - i;
        emptyStr += str.charAt(position);
      }
      array3.push(emptyStr);
    });
    
    console.log(array3.join(' '));
  }
  
  reverseString("hello");
// i mean look at this it's so clean, i suck so hard
/*better version
function reverseString(str) {
  return str.split('').reverse().join('');
}*/