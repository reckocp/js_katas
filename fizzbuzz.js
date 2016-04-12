var fizzBuzz = function (num) {
  if (num % 15 === 0) {
    return "Fizzbuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
};

console.log(fizzBuzz(8));
