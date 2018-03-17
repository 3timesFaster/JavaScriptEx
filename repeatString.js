// my shity version

function repeatStringNumTimes(str, num) {
    if (num > 0){
      return str.repeat(num);
    }
    return '';
  }
  
  repeatStringNumTimes("abc", -1);
  /*
  function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);
*/