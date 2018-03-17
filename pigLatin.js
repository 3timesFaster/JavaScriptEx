function translatePigLatin(str) {
    var charOne = str.charAt(0)
    var ar = ['a', 'i', 'e', 'o', 'u']
    if (charOne.match(/[aeiou]/)) {
        charOne = 'w';
    }
    var newStr = str.match(/^[^aeiou]*/).join('')
    var first = str.slice(0 , newStr.length)
    var truncStr = str.replace(first, '')
    str = (charOne === 'w' ? str+charOne+'ay': truncStr+newStr+'ay')
    return str;
}
  
translatePigLatin("consonant");
