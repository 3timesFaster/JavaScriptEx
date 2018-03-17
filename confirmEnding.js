// yay my first recrusive function [ツ] even though i could have done it in one line 
// laltely i'm trying to write all my code in recrusive so i get better at it

function confirmEnding(str, target) {
    str = str.split(' ').pop();
    if(str !== target && str.length !== 1) {
      str = str.slice(1);
      return confirmEnding(str, target);
    } if (str === target) {
      return true;
    }
    return false;
  }
  
  confirmEnding("Bastian", "n");
// one line!
/*
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}
*/