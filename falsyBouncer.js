// ('ω')ノ
function bouncer(arr) {
    return arr.filter(function(element) {
      return Boolean(element) === true;
    });
  }
  
bouncer([7, "ate", "", false, 9]);

/*
function bouncer(arr) {
  return arr.filter(Boolean);
}
*/