// this one took a long time i dont even know why it seemed so easy at the begining
// this is probably the worst code i've written
function titleCase(str) {
    str = str.split(' ');
    var base = [];
    for (i = 0; i <= str.length - 1; i++) {
      str[i] = str[i].toLowerCase();
      base += ' ' + str[i].replace(/^\b\w/g, str[i].charAt(0).toUpperCase());
    }
    return base;
  }
  
  titleCase("sHoRt AnD sToUt");
  /*
  function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}*/