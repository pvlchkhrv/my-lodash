// Creates a slice of array with n elements dropped from the end.

const makeDropRight = (array, numberOfElements = 1) => {
  if (numberOfElements >= array.length) return [];
  const arrayCopy = [ ...array ];
  for (let i = 0; i < numberOfElements; i++) {
    arrayCopy.pop();
  }
  return arrayCopy;
};

console.log(makeDropRight([1, 2, 3]));
console.log(makeDropRight([1, 2, 3], 0));
console.log(makeDropRight([1, 2, 3], 5));
console.log(makeDropRight([1, 2, 3], 2));
