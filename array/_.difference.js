// Creates an array of array values not included in the other given arrays using
// SameValueZero for equality comparisons.
// The order and references of result values are determined by the first array

// returns a new array

// Example
// _.difference([2, 1], [2, 3]);
// => [1]

const makeDifference = (array, values) => array.filter((el) => !values.includes(el));

console.log(makeDifference(['a', 2, 3], [2, 3]));
