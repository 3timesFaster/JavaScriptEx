//(゜-゜)　このコード。。。なんか悪くないな～
function destroyer(arr) {
    var args = Object.values(arguments).slice(1);
    return arr.filter(function(element) { return !args.includes(element); });
  }
  
  
  destroyer(["tree", "hamburger", 53], "tree", 53);
//ではまたお会いしましょう　(^ε^)-☆Chu!!