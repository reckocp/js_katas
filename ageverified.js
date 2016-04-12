var ageVerifier = function (age) {
    if (age < 21) {
      return "You are too young.";
  } else {
      return "Proceed.";
  }
};

console.log(ageVerifier(21));
