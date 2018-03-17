// yay intermediate algorithms can't spell...
function sumAll(arr) {
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  var arrMiss = arr[arr.length - 1] - arr[0];
  if (arrMiss + 1 !== arr.length) {
    arr.push(arr[arr.length - 2]++);
    return sumAll(arr);
  }else {
    return arr.reduce(function(a, b) { return a + b; });
  }
}

sumAll([1, 4]);