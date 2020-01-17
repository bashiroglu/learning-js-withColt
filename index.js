function notEquelToTheseNumbers(a, b) {
  return function(num) {
    return a !== num && b !== num;
  };
}

const notFiveAndFour = notEquelToTheseNumbers(5, 4);

/* in order to understand this function we take we can look at like this */
const notFiveAndFour = notEquelToTheseNumbers(5, 4);

const notFiveAndFour = function(num) {
  return 5 !== num && 4 !== num;
};

notFiveAndFour(10);



console.log(notFiveAndFour(6));
