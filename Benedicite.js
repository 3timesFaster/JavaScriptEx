// this one was pretty hard...
function convertToRoman(num) {
    var array = [];
    var halfs = ['V', 'L', 'D'];
    var ones = ['I', 'X', 'C', 'M'];
    num = num.toString().split('').reverse()
    var roma = function(arr, index) {
      var roman;
      var fifth = arr % 5;
      var half = Math.floor(arr / 5);
      if (half == 0) {
        if (fifth == 4) {
          roman = `${ones[index]}${halfs[index]}`;
        }
        if (fifth == 0) {
          roman = '';
        }
        if (fifth != 4 && fifth != 0) {
          roman = `${ones[index].repeat(fifth)}`
        }
        return roman;
      } 
      if (half != 0) {
        if (fifth == 4) {
          roman = `${ones[index]}${ones[index + 1]}`;
        }
        if (fifth == 0) {
          roman = `${halfs[index]}`;
        }
        if (fifth != 4 && fifth != 0) {
          roman = `${halfs[index]}${ones[index].repeat(fifth)}`
        }
        return roman;
      }
    };
    for (var a = 0; a < num.length ; a++) {
      var result = roma(num[a], a)
      array.unshift(result)
     // console.log(array);
    }
    return array.join('');
  }
  
convertToRoman(3999);