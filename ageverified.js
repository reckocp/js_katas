var ageVerifier = function (age) {
  if (age < 21) {
    console.log("You are too young.");
  } else {
    console.log("Proceed.");
  }
};

console.log(ageVerifier(21));
