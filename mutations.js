//not very nice code but the indexOf method was interesting
function mutation(arr) {
    var count = 0;
    var element2;
    for (i = 0; i < arr[1].length; i++) {
      element2 = arr[1].slice(i, i + 1);
      //remove toLowerCase to get a deeper comparison
      var pos = arr[0].toLowerCase().indexOf(element2.toLowerCase());
      
      while (pos !== -1) {
        count++;
        pos = arr.indexOf(element2, pos + 1);
      }
    }
    return count === arr[1].length;
  }
  
  mutation(["Mary", "Aarmy"]);
/*
function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) !== -1;
    });
} */