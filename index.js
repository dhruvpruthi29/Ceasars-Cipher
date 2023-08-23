function rot13(str) { // LBH QVQ VG!
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
str = str.split('');
var res = '';

for (var i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) !== -1) {     // if letter exists in alphabet do the following
    if (alphabet.indexOf(str[i]) < 13) {      // if letter is positioned before the first 13 characters
        res += String.fromCharCode(str[i].charCodeAt(0) + 13);  // decode letter by adding 13 more ie 'E'->'R'
    } else {
        res += String.fromCharCode(str[i].charCodeAt(0) - 13); // if not, decode letter by subtracting 13 letter ie 'S'->'F'
    }
    } else {
    res += str[i];       // if character is not part of alphabet, simply append to solution string
    }
}

return res;
} 

// Change the inputs below to test
rot13("SERR PBQR PNZC");
// console.log(rot13("LBH QVQ VG!"));