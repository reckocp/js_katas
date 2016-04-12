
var startsWithAVowel = function (text) {
    var vowels = ["a", "e", "i", "o", "u"];
    for(var i= 0, l = vowels.length; i< l; i++){
        if(vowels[i] === text[0].toLowerCase() ){
  		      return true;
  	    }
    }
    return false;
};


var pigatize = function (text) {
  if (startsWithAVowel(text) === true) {
    return text + "way";
  } else {
    return text + "ay";
  }
};

console.log(pigatize("California"));
