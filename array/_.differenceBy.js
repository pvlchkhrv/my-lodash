// This method is like _.difference except that it accepts iteratee which is invoked
// for each element of array and values to generate the criterion by which they're compared.
// The order and references of result values are determined by the first array.
// The iteratee is invoked with one argument: (value).
// Returns a new array.

// Example
// _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]

// The `_.property` iteratee shorthand.
// _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]

const makeDifferenceBy = (array, values, iteratee) => array
  .filter((el) => !values.map(iteratee).includes(iteratee(el)));

// eslint-disable-next-line no-console
console.log(makeDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
// eslint-disable-next-line no-console
console.log(makeDifferenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x'));
