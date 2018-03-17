//not bad but i couldent complete the last chalenge so i'm depressed... (._.)
function myReplace(str, before, after) {
    if (before.charAt(0) !== before.charAt(0).toLowerCase()) {
        after = after.CharAt(0).toUpperCase() + after.slice(1)
    }
    var re = new RegExp(before,'i')
    str = str.replace(re, after)
    console.log(str)
    return str
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
// this is the advanced solution
/*function myReplace(str, before, after) {

    // create a function that will change the casing of any number of letter in parameter "target"
    // matching parameter "source"
    function applyCasing(source, target) {
        // split the source and target strings to array of letters
        var targetArr = target.split("");
        var sourceArr = source.split("");
        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
            // find out the casing of every letter from sourceArr using regular expression
            // if sourceArr[i] is upper case then convert targetArr[i] to upper case
            if (/[A-Z]/.test(sourceArr[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            }
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
            else targetArr[i] = targetArr[i].toLowerCase();
        }
        // join modified targetArr to string and return
        return (targetArr.join(""));
    }


    // replace "before" with "after" with "before"-casing
    return str.replace(before, applyCasing(before, after));
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");*/