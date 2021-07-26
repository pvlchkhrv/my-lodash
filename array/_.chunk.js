// Creates an array of elements split into groups the lengths of size.
// If array can't be split evenly, the final chunk will be the remaining elements.

// Examples
// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

const makeChunk = (array, lengthOfChunk) => {
  if (array.length < 1) return [];
  if (!array) {
    throw new Error('No array as an argument!!');
  }
  const arrayCopy = [...array];
  const result = [];
  while (arrayCopy.length > lengthOfChunk) {
    result.push(arrayCopy.splice(0, lengthOfChunk));
  }
  result.push(arrayCopy);
  return result;
};

// eslint-disable-next-line no-console
console.log(makeChunk(['a', 'b', 'c', 'd', 'f', 'g', 'h'], 3));
// eslint-disable-next-line no-console
console.log(makeChunk(['a', 'b', 'c', 'd', 'f', 'g', 'h'], 2));
// eslint-disable-next-line no-console
console.table(makeChunk(['a', 'b', 'c', 'd', 'f', 'g', 'h'], 1));
// eslint-disable-next-line no-console
console.log(makeChunk([], 1));
// eslint-disable-next-line no-console
console.log(makeChunk([], 0));
// eslint-disable-next-line no-console
console.log(makeChunk(0));
// eslint-disable-next-line no-console
console.log(makeChunk());
