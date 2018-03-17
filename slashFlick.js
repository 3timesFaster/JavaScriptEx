// took me like 3 seconds this one was stupid
function slasher(arr, howMany) {
    arr.splice(0, howMany);
    return arr;
  }

  slasher([1, 2, 3], 2);
  
// samething really
/*
function slasher(arr, howMany) {

  // Return string after the amount chopped off.
  return arr.slice(howMany);

}
*/