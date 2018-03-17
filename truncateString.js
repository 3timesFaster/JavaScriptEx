// i suck balls at coding
function truncateString(str, num) {
    if(num > 3) {
      return  str.length > num && num > 0 ? str.substring(num - 3, 0) + '...' : str;
    } 
    return str.length > num && num > 0 ? str.substring(num, 0) + '...' : str;
  }
  
  truncateString("A-", 1)
/*
function truncateString(str, num) {
  if (str.length > num)
    return str.slice(0, num > 3 ? num-3 : num) + '...';
  return str;
}
*/  