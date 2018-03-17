//used a bit of ES6 freecodecamp don't like that but i dont give a shit
function largestOfFour(arr) {
    var array = [];
      arr.map((value) => value.sort(function(a, b) {
          return a - b
        })
      )
    array = arr.map((value) => value = value.pop())
      
    return array;
}
  
  
  largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])

// man these advanced solutions always make me depressed
/*function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
} */