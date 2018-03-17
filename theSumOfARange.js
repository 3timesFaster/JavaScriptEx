function range(n1, n2, step) {
    var rang = {ran : []};
    if (n1 < n2) {
      for (var i = n1; i <= n2; i++) {
        if (step == true) {
          var stepAdd = 1 * step
          var adding = n1 += stepAdd;
        } else {
          var adding = n1++;
          rang.ran.push(adding);
        }
      }
    } else if (n1 > n2){
        for (var v = n1; v >= n2; v--) {
          if (step == true) {
            var stepAdd = 1 * step
            var adding1 = n1 -= stepAdd;
          } else {
            var adding1 = n1--;
            rang.ran.push(adding1);
          }
        }
    }
    return rang.ran
  }
  
  function sum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55

// more efficent version
/*
  function range(start, end, step) {
    if (step == null) step = 1;
    var array = [];
  
    if (step > 0) {
      for (var i = start; i <= end; i += step)
        array.push(i);
    } else {
      for (var i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
  }
  
  function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
      total += array[i];
    return total;
  }
*/