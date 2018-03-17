//I think my code is better but to each there own

function factorialize(num) {
    var factorial = 1;
    for (i = 1; i <= num; i++) {
      factorial = factorial * i ;
    }
    console.log(factorial);
  }
  
  factorialize(5);

//and here is the recrusive master peice (i cant spell)
/*function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

factorialize(5);*/

// number 2
/*function factorialize(num) {
  for (a = 1;num >= 1; num--) {
a = num * a;
  }
  return a;
}

factorialize(5);*/