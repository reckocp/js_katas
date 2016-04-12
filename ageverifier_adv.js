var ageVerifier = function (age) {
    for(var i = 0; i < age.length; i++){
      if (age[i] < 21) {
        console.log("You are " + age[i] + ". You are too young.");
      } else {
        console.log("You are " + age[i] + ". Proceed.");
      }
    }
};

ageVerifier([15,25,30]);


/*Why did return not work?
Console log returns undefined which is annoying.
^^ Because my returns are already inside of console.logs*/
