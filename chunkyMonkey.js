// meh
function chunkArrayInGroups(arr, size) {
    var arraySplit = [];
    for (i = 0; arr.length != 0; i++) {
      arraySplit.push(arr.slice(0, size))
      //console.log(arraySplit)
      arr.splice(0, size)
      //break;
    }
    return arraySplit
  }
  
  
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
/*  