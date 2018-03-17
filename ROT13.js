//this code is so terrible
function rot13(str) {
	// LBH QVQ VG!
	var array = [];
	for (i = 0; i < str.length; i++) {
		var charCode = str.charCodeAt(i);
		//console.log(charCode)
		if (charCode >= 65 && charCode <= 90) {
		  var char = charCode < 78 && charCode >= 65 ? 90 - (12 - (charCode - 65)) :  charCode - 13;
		  array.push(String.fromCharCode(char));
		} else {
		  array.push(String.fromCharCode(charCode));
		}
	//	array.push(String.fromCharCode(char));
	//	console.log(String.fromCharCode(80))
	}
	return array.join('');
}

rot13('SERR PBQR PNZC');

//as usual these solutions are BOSS
/*
function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}
*/