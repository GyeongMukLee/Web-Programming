var word1 = "a";
var word2 = "nam";
var word3 = "nal p";
var word4 = "lan a c";
var word5 = "a man a p";

var pharse = "";

for (var i = 0; i < 4; i++) {
    if (i == 0) {
        pharse = word5;
    } else if (i == 1) {
        pharse = pharse + word4;
    } else if (i == 2) {
        pharse = pharse + word1 + word3;
    } else if (i == 3) {
        pharse = pharse + word1 + word2 + word1;
    }
}

alert(pharse);