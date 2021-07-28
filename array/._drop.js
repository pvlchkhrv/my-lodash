// Creates a slice of array with n elements dropped from the beginning.

// Example
// _.drop([1, 2, 3]);
// => [2, 3]
 
// _.drop([1, 2, 3], 2);
// => [3]
 
// _.drop([1, 2, 3], 5);
// => []
 
// _.drop([1, 2, 3], 0);
// => [1, 2, 3]

const makeDrop = (array, numberOfElements = 1) => {
  if (numberOfElements >= array.length) return [];
  const arrayCopy = [ ...array ];
  for (let i = 0; i < numberOfElements; i++) {
    arrayCopy.shift();
  }
  return arrayCopy;
};

console.log(makeDrop([1, 2, 3]));
console.log(makeDrop([1, 2, 3], 5));
console.log(makeDrop([1, 2, 3], 0));