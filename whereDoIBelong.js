// yeah may way of solving it was the best way woooo!
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => {return a - b });
    return arr.indexOf(num);
  }
  
  getIndexToIns([3, 10, 5], 3);
  